import { Flex } from "@chakra-ui/react";
import Navbar from "../../components/layout/header/Navbar";
import Hero from "../../components/uicomponents/hero/Hero";
import { PrimaryColor } from "../../theme/GlobalStyles";

export const Home = () => {
  return (
    <Flex flexDirection={"column"} color={PrimaryColor}>
      <Navbar />
      <Hero />
    </Flex>
  );
};
