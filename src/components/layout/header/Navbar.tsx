import { MenuLinks } from "./MenuLink";
import { ReactNode, useEffect, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { PrimaryColor } from "../../../theme/GlobalStyles";
const CloseIcon = ({ active }: { active: boolean }) => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      // fill={active ? "white" : PrimaryColor}
      fill={"white"}
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = ({ active }: { active: boolean }) => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    // fill={active ? "white" : PrimaryColor}
    fill={"white"}
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({
  toggle,
  active,
  isOpen,
}: {
  toggle: () => void;
  isOpen: boolean;
  active: boolean;
}) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon active={active} /> : <MenuIcon active={active} />}
    </Box>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [active, setActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 0 ? setActive(true) : setActive(false);
    });
  }, []);
  const toggle = () => setIsOpen(!isOpen);
  const NavBarContainer = ({ children, ...props }: { children: ReactNode }) => {
    return (
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100vw"
        shadow={"lg"}
        px={12}
        zIndex={999999}
        py={6}
        position={active ? "fixed" : "sticky"}
        top={0}
        transition={"1.5s all ease"}
        borderBottom={"1px solid #eee"}
        // bg={
        //   !active
        //     ? ["primary.500", "primary.500", "white", "white"]
        //     : PrimaryColor
        // }
        bg="darkblue"
        color={["white", "white", "primary.700", "primary.700"]}
        {...props}
      >
        {children}
      </Flex>
    );
  };

  return (
    <NavBarContainer>
      <Logo
        w="100px"
        color={["white", "white", "primary.500", "primary.500"]}
      />
      <MenuToggle active={active} toggle={toggle} isOpen={isOpen} />
      <MenuLinks active={active} isOpen={isOpen} />
    </NavBarContainer>
  );
};

export default NavBar;
