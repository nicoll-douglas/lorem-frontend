import {
  Card,
  CardBody,
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { noWrap } from "@/lib/constants";
import { useCompactView } from "@/features/ui/compactView";
import useIsMe from "../../hooks/useIsMe";
import { DeleteBoardBtn, EditBoardBtn } from "@/features/boards";

export default function BoardPreview({ board }) {
  const { compactView } = useCompactView();
  const [isMe] = useIsMe();

  return (
    <LinkBox w={"full"}>
      <Card size={"sm"} w={"full"} variant={"filled"}>
        <CardBody py={compactView ? 2 : 3}>
          <Flex justifyContent={"space-between"} alignItems={"center"} gap={4}>
            <LinkOverlay
              as={Link}
              to={`/boards/${board.name}`}
              maxW={{ base: "calc(100% - 40px)", sm: "calc(100% - 165px)" }}
            >
              <Heading size={{ base: "sm", md: "md" }} {...noWrap}>
                {`/${board.name}`}
              </Heading>
            </LinkOverlay>
            {isMe && (
              <Flex gap={2} minW={"fit-content"}>
                <EditBoardBtn board={board} />
                <DeleteBoardBtn board={board} />
              </Flex>
            )}
          </Flex>
        </CardBody>
      </Card>
    </LinkBox>
  );
}
