import { useForm } from "react-hook-form";
import {
  FormControl,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormLabel,
  FormErrorMessage,
  Button,
  Select,
  Textarea,
  FormHelperText,
  UnorderedList,
  ListItem,
  Input,
  Skeleton,
} from "@chakra-ui/react";
import ageValidation from "../data/ageValidation";
import bioValidation from "../data/bioValidation";
import getImgValidation from "@/lib/utils/getImgValidation";
import useProtectedSubmission from "@/lib/hooks/useProtectedSubmission";
import isDigits from "@/lib/utils/isDigits";
import destructureData from "../utils/destructureData";
import useProfileContext from "../hooks/useProfileContext";
import { useQueryClient } from "@tanstack/react-query";
import { imgHelperText } from "@/lib/constants/helperText";

export default function EditProfileForm({ onClose }) {
  const { isLoading, protectedData } = useProfileContext();
  const { bio, age, pronouns } = destructureData(protectedData);
  const isLoaded = !isLoading;
  const queryClient = useQueryClient();

  const form = useForm({
    shouldUnregister: true,
    defaultValues: {
      bio,
      age,
      pronouns,
    },
  });
  const onSubmit = useProtectedSubmission(form, "/api/me/profile", {
    onSuccess: {
      message: "Successfully updated profile",
      callback: () => {
        onClose();
        queryClient.invalidateQueries({
          queryKey: ["GET /api/me"],
        });
      },
    },
    formData: true,
  });

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <FormControl mb={6} isInvalid={form.formState.errors.profilePicture}>
        <FormLabel>Profile picture</FormLabel>
        <Skeleton isLoaded={isLoaded}>
          <Input
            type="file"
            multiple={false}
            accept="image/*"
            {...form.register(
              "profilePicture",
              getImgValidation({ required: false })
            )}
          />
        </Skeleton>
        <FormErrorMessage>
          {form.formState.errors.profilePicture?.message}
        </FormErrorMessage>
        <FormHelperText>
          <UnorderedList>
            {imgHelperText.map((text, index) => (
              <ListItem key={index}>{text}</ListItem>
            ))}
          </UnorderedList>
        </FormHelperText>
      </FormControl>
      <FormControl isInvalid={form.formState.errors.age} mb={6}>
        <FormLabel>Age</FormLabel>
        <NumberInput step={1} allowMouseWheel isValidCharacter={isDigits}>
          <Skeleton isLoaded={isLoaded}>
            <NumberInputField
              data-testid="profile-age"
              {...form.register("age", ageValidation)}
            />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </Skeleton>
        </NumberInput>
        <FormErrorMessage>
          {form.formState.errors.age?.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl mb={6} isInvalid={form.formState.errors.pronouns}>
        <FormLabel>Pronouns</FormLabel>
        <Skeleton isLoaded={isLoaded}>
          <Select
            data-testid="profile-pronouns"
            placeholder="Select pronouns"
            {...form.register("pronouns")}
          >
            <option value={"he/him"}>he/him</option>
            <option value={"she/her"}>she/her</option>
            <option value={"they/them"}>they/them</option>
            <option alue={"none"}>none</option>
          </Select>
        </Skeleton>
        <FormErrorMessage>
          {form.formState.errors.pronouns?.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={form.formState.errors.bio} mb={6}>
        <FormLabel>Bio</FormLabel>
        <Skeleton isLoaded={isLoaded}>
          <Textarea
            resize={"none"}
            data-testid="profile-bio"
            placeholder="Enter bio"
            {...form.register("bio", bioValidation)}
            size={"md"}
            minH={32}
          />
        </Skeleton>
        <FormErrorMessage>
          {form.formState.errors.bio?.message}
        </FormErrorMessage>
        <FormHelperText>
          <UnorderedList>
            <ListItem>Must be no more than 100 characters long</ListItem>
          </UnorderedList>
        </FormHelperText>
      </FormControl>
      <Button
        w={"full"}
        type="submit"
        data-testid="profile-submit"
        isLoading={form.formState.isSubmitting}
        isDisabled={!isLoaded}
      >
        Submit
      </Button>
    </form>
  );
}
