import {
  Card,
  CardBody,
  Avatar,
  CardHeader,
  Flex,
  Heading,
  Box,
  Text,
  Stack,
  StackDivider,
  Divider,
} from "@chakra-ui/react";
import { formatISOString } from "@/lib/utils";
import useProfile from "../../hooks/useProfile";
import AgeEditable from "./AgeEditable";
import PronounEditable from "./PronounEditable";
import config from "@/config";
import ProfileField from "../ui/ProfileField";

export default function ProfileInfo() {
  const { data } = useProfile();
  const profile = data.profile;
  const userPrivilege = data.userPrivilege;

  return (
    <Card
      variant={{ base: "unstyled", md: "outline" }}
      w={{ base: "full", md: 64, lg: 80 }}
      position={{ base: "static", md: "sticky" }}
      top={"72px"}
      h={{ md: "calc(100vh - 88px)" }}
      size={"sm"}
      overflowY={"auto"}
    >
      <CardHeader>
        <Flex gap={4} alignItems={"center"} flexWrap={"wrap"}>
          <Avatar size={"lg"} src={profile.avatar} name={profile.username} />
          <Box>
            <Heading size={"md"} as={"h1"}>
              {profile.username}
            </Heading>
            {profile.bio && <Text>{profile.bio}</Text>}
          </Box>
        </Flex>
      </CardHeader>
      <Divider my={{ base: 4, md: 0 }} />
      <CardBody>
        <Stack divider={<StackDivider />} gap={1}>
          <AgeEditable
            defaultValue={profile.age}
            isDisabled={userPrivilege === config.userPrivilege.basic}
          />
          <PronounEditable
            defaultValue={profile.pronouns}
            isDisabled={userPrivilege === config.userPrivilege.basic}
          />
          <ProfileField
            title="Joined On"
            value={formatISOString(profile.createdAt)}
          />
        </Stack>
      </CardBody>
    </Card>
  );
}
