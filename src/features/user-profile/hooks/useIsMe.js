import { useLocation, useParams } from "react-router-dom";

export default function useIsMe() {
  const { pathname } = useLocation();
  const { username } = useParams();
  const isMe = pathname === "/me";
  return [isMe, username];
}
