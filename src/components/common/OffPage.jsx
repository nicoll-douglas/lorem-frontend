import Container from "@/components/common/Container";
import {
  Center,
  VStack,
  Heading,
  Text,
  Image,
  Flex,
  Box,
  Button,
} from "@chakra-ui/react";
import Header from "@/components/common/Header";
import Logo from "@/components/common/Logo";
import { Link } from "react-router-dom";

export default function OffPage({ title, message, imageUrl }) {
  return (
    <Box position={"fixed"} minW={"100vw"} minH={"100vh"} zIndex={100}>
      <Box overflowY={"auto"} maxH={"100vh"}>
        <Container>
          <Header>
            <Logo to={"/"} />
          </Header>
          <Center mt={12} mb={32} flex={1}>
            <Flex
              gap={4}
              alignItems={"center"}
              justifyContent={"end"}
              flexDir={{ base: "column", lg: "row" }}
            >
              <VStack
                gap={3}
                maxW={"420px"}
                as={"main"}
                alignItems={{ base: "center", lg: "start" }}
                textAlign={{ base: "center", lg: "left" }}
              >
                <Heading as="h1" size={{ base: "2xl", sm: "4xl" }}>
                  {title}
                </Heading>
                <Text fontSize={{ sm: "lg" }}>{message}</Text>
                <Button as={Link} to={"/"} size={"lg"} mt={2}>
                  Go Back
                </Button>
              </VStack>
              <Image
                src={imageUrl}
                w={{ base: "300px", md: "380px" }}
                h={{ base: "300px", md: "380px" }}
                mt={{ base: -8, lg: 0 }}
                alt="graphic displaying dialogue"
              />
            </Flex>
          </Center>
        </Container>
      </Box>
    </Box>
  );
}
