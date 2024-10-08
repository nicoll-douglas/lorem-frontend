import { Flex } from "@chakra-ui/react";
import ProfileInfo from "./ProfileInfo";
// import ProfileTabs from "./ProfileTabs";
import useProfile from "../../hooks/useProfile";
import { Navigate } from "react-router-dom";
import useIsMe from "../../hooks/useIsMe";
// import { useAuth } from "@/features/auth";

export default function Profile({ children }) {
  const { data } = useProfile();
  const [isMe] = useIsMe();
  // const { currentUser } = useAuth();

  if (!isMe && data) {
    // if (data.profile.username === currentUser?.username)
    if (data.profile.username === data.user.username)
      return <Navigate to={"/me"} />;
  }

  return (
    <Flex
      flex={1}
      maxW={"full"}
      gap={4}
      flexDir={{ base: "column", md: "row" }}
    >
      <ProfileInfo />
      {/* <ProfileTabs /> */}
      {children}
    </Flex>
  );
}
