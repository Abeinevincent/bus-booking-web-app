import { Flex, Box, Text, Icon, Stack, Button } from "@chakra-ui/react";
import { TertiaryColor, PrimaryYellowColor } from "../../../theme/GlobalStyles";
import { BsEnvelope } from "react-icons/bs";
import { FaDonate } from "react-icons/fa";

const Announcement = () => {
  return (
    // <Box bg={TertiaryColor} h={12}>
    <>
      <Box
        display={{ base: "none", md: "flex" }}
        // gap={2}
        bg={TertiaryColor}
        h={12}
        alignItems="center"
        flexWrap={"wrap-reverse"}
        justifyContent={"space-around"}
        style={{ alignItems: "center!important" }}
      >
        <Box
          display={"flex"}
          gap={2}
          alignItems="center"
          justifyContent={"space-around"}
        >
          <Icon
            color={PrimaryYellowColor}
            as={BsEnvelope}
            data-testid="email-icon"
          />
          <Text color={"white"}>codewithvincent@gmail.com</Text>
        </Box>
        <Box
          display="flex"
          gap={2}
          alignItems="center"
          justifyContent={"space-around"}
        >
          <Button
            leftIcon={<FaDonate />}
            colorScheme={"yellow"}
            variant="solid"
            py={0.5}
            height={8}
          >
            Donate
          </Button>
        </Box>
      </Box>
      <Box
        display={{ base: "flex", md: "none" }}
        bg={TertiaryColor}
        h={12}
        color="white"
        alignItems="center"
        flexWrap={"wrap"}
        justifyContent={"center"}
        style={{ alignItems: "center!important" }}
      >
        <Text textAlign={"center"} fontSize={13}>
          Support our charity and mission. Donate to{" "}
          <a href="#">codewithvincent</a>
        </Text>
      </Box>
    </>
  );
};

export default Announcement;
