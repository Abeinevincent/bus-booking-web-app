import { Box, Image, Text } from "@chakra-ui/react";
import MyLogo from "../../../assets/images/mylogo.png";

type LogoProps = {
  w: string;
  color: string[];
};

export const Logo = (props: LogoProps) => {
  return (
    <Box {...props}>
      <Text fontSize={"lg"} color="white" fontWeight="bold">
        <Image src={MyLogo} alt="logo" width="600px" />
        {/* GLOBALCOACHES */}
      </Text>
    </Box>
  );
};
