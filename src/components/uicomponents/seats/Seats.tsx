import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";

const Seats = () => {
  const [occupied, setOccupied] = useState(false);
  return (
    <Box>
      <Box
        display="flex"
        gap={4}
        alignItems="center"
        justifyContent="flex-start"
      >
        <hr style={{ width: "200px" }} />
        <Text>Select Your Seats</Text>
        <hr style={{ width: "200px" }} />
      </Box>
      <Box
        display="flex"
        flexWrap={"wrap"}
        padding={10}
        alignItems="center"
        justifyContent="flex-start"
      >
        <Box
          w={35}
          h={35}
          border={"1px solid white"}
          borderBottom={"3px solid yellow"}
          display="flex"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          onClick={() => setOccupied(!occupied)}
          padding={5}
          margin={3}
          background={occupied ? "#b21" : "transparent"}
          color="white"
        >
          <Text color="white">1</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Seats;
