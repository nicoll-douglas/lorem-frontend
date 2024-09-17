import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import useNotif from "./useNotif";
import { useAuth } from "@/features/auth";

export default function useProtectedSubmission(onSuccess) {
  const navigate = useNavigate();
  const notifs = useNotif();
  const { setCurrentUser } = useAuth();

  const handlers = useMemo(
    () => ({
      401: () => {
        notifs.unauthorized();
        setTimeout(navigate, 250, "/");
      },
      500: () => notifs.serverError(),
      429: () => notifs.tooMany15(),
      200: async (response) => {
        const { user } = await response.json();
        setCurrentUser(user);
        onSuccess();
      },
    }),
    []
  );

  return handlers;
}
