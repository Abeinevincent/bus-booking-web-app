import { Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";

type SeatProps = {
  occupied: boolean;
  seatNumber: number;
  onClick: (number: number) => void;
};

const Seat = ({ occupied, seatNumber, onClick }: SeatProps) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    onClick(seatNumber);
  };

  return (
    <Box
      w={30}
      h={30}
      border={"1px solid white"}
      borderBottom={"3px solid yellow"}
      display="flex"
      alignItems="center"
      overflowX={"hidden"}
      justifyContent="center"
      cursor="pointer"
      onClick={handleClick}
      padding={1}
      margin={1}
      background={clicked ? "teal" : "transparent"}
      color="white"
    >
      <Text fontSize={13}> {seatNumber}</Text>
    </Box>
  );
};

export default Seat;
