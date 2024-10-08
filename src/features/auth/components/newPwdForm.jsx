import { FormControl } from "@/components/form";
import { useForm } from "react-hook-form";
import passwordValidation from "../data/passwordValidation";
import { Button } from "@chakra-ui/react";
import useNewPwd from "../hooks/useNewPwd";
import { helperText } from "@/lib/constants";

export default function NewPwdForm({ token }) {
  const form = useForm();
  const onSubmit = useNewPwd(form, token);

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} aria-label="New Password Form">
      <FormControl
        formRef={form}
        registerKey="password"
        placeholder="Enter password"
        inputTestId="NewPwdForm-password"
        label="Password"
        helperText={helperText.newPwd}
        type="password"
        {...form.register("password", passwordValidation)}
      />
      <FormControl
        formRef={form}
        registerKey="confirmPassword"
        inputTestId="NewPwdForm-confirmPassword"
        errorTestId="NewPwdForm-confirmPassword-error"
        placeholder="Re-enter password"
        label="Confirm password"
        type="password"
        {...form.register("confirmPassword", {
          required: "Please confirm your new password",
          validate: (value) =>
            value === form.getValues("password") || "Passwords do not match",
        })}
      />
      <Button
        type="submit"
        data-cy="NewPwdForm-submit"
        w="full"
        isLoading={form.formState.isSubmitting}
      >
        Submit
      </Button>
    </form>
  );
}
