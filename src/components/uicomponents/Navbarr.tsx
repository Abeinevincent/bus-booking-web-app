import { Box, Center, Flex, Link } from "@chakra-ui/react";
// import { PrimaryColor } from "../../../theme/GlobalStyles";
import Logo from "../../../assets/images/mylogo.png";

export const Navbar = () => {
  return (
    <Flex
      justifyContent={"space-around"}
      w={"100%"}
      h={55}
      // bgColor={PrimaryColor}
      color="white"
    >
      <Box overflowY={"hidden"}>
        <Link>
          <img src={Logo} width="60" height="60" />
        </Link>
      </Box>
      <Center display={"flex"} gap={5}>
        <Link>Home</Link>
        <Box>Courses</Box>
        <Box>Tutorials</Box>
        <Box>Projects</Box>
        <Box>Mentorship</Box>
        <Box>FAQ</Box>
      </Center>
    </Flex>
  );
};
