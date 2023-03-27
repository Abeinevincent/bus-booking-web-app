import { Box, Stack, Button } from "@chakra-ui/react";
import { BsBookFill, BsGlobe, BsPhone } from "react-icons/bs";
import { FaHome, FaRegistered, FaSignInAlt } from "react-icons/fa";
import { MenuItem } from "./MenuItem";

export const MenuLinks = ({
  isOpen,
  active,
}: {
  isOpen: boolean;
  active: boolean;
}) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem active={active} to="/">
          <FaHome />
          Home
        </MenuItem>
        <MenuItem active={active} to="/bookings">
          <BsBookFill />
          Bookings
        </MenuItem>
        <MenuItem active={active} to="/contact">
          <BsPhone />
          Contact
        </MenuItem>
        <MenuItem active={active} to="http://globalcoachesug.com">
          <BsGlobe />
          Website
        </MenuItem>

        <MenuItem active={active} to="/login">
          <FaSignInAlt />
          Login
        </MenuItem>
        
      </Stack>
    </Box>
  );
};
