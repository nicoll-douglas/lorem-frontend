import {
  Card,
  Heading,
  CardBody,
  Text,
  VStack,
  Image,
  SlideFade,
} from "@chakra-ui/react";
import useThread from "../hooks/useThread";
import chatting2Url from "@/assets/images/chatting-2.svg";
import ReplyCard from "./ReplyCard";
import ThreadCard from "./ThreadCard";
import { Spinner } from "@/components/common";
import { ReplyTextarea } from "@/features/replies";

export default function Thread() {
  const { data, isLoading } = useThread();
  const filtered = data?.thread.replies.filter((reply) => !reply.deleted);

  return (
    <Card variant={{ base: "unstyled", md: "outline" }} flex={1} size={"sm"}>
      {isLoading ? (
        <Spinner p={4} />
      ) : (
        <SlideFade in={!!data} offsetY={10}>
          <CardBody>
            <ThreadCard thread={data.thread} />
            <ReplyTextarea threadId={data.thread._id} />
            {filtered.length === 0 ? (
              <VStack gap={0} textAlign={"center"} mb={10}>
                <Image src={chatting2Url} width={240} height={240} />
                <Heading size={"md"}>Nothing to show</Heading>
                <Text mt={1}>
                  This thread has no replies, be the first start the
                  conversation!
                </Text>
              </VStack>
            ) : (
              <VStack gap={{ base: 2, sm: 3 }} mt={4} alignItems={"stretch"}>
                {filtered
                  .sort(
                    (a, b) =>
                      new Date(a.createdAt).valueOf() -
                      new Date(b.createdAt).valueOf()
                  )
                  .map((reply) => (
                    <ReplyCard key={reply._id} reply={reply} />
                  ))}
              </VStack>
            )}
          </CardBody>
        </SlideFade>
      )}
    </Card>
  );
}
