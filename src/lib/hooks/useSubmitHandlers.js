import useNotif from "@/lib/hooks/useNotif";

export default function useSubmitHandlers(submit, handlers) {
  const notifs = useNotif();

  const onSubmit = async () => {
    try {
      const response = await submit();
      handlers[response.status](response);
    } catch {
      notifs.networkError();
    }
  };

  return onSubmit;
}
