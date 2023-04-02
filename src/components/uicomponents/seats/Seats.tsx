import { Box, Button, Flex, Spinner, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Seat from "./Seat";
import "react-toastify/dist/ReactToastify.css";

type SeatsProps = {
  setViewNumber: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  clickedNumbers: number[];
  destination: string;
  dateOfTravel: string;
  phoneNumber: string;
  timeOfTravel: string;
  makePayment: () => void;
  setClickedNumbers: React.Dispatch<React.SetStateAction<number[]>>;
};

const Seats = ({
  isLoading,
  phoneNumber,
  destination,
  clickedNumbers,
  setClickedNumbers,
  dateOfTravel,
  makePayment,
  timeOfTravel,
}: SeatsProps) => {
  const [occupied, setOccupied] = useState(false);
  const [seatNumbers, setSeatNumbers] = useState<number[]>([]);

  // useEffect hook to update state variable on component mount
  useEffect(() => {
    let arr = [];
    for (let i = 1; i <= 64; i++) {
      arr.push(i);
    }
    setSeatNumbers(arr);
  }, []);

  // Function to be called upon clicking on the number
  const handleNumberClick = (number: number) => {
    if (clickedNumbers.includes(number)) {
      setClickedNumbers(clickedNumbers.filter((n) => n !== number));
    } else {
      setClickedNumbers([...clickedNumbers, number]);
    }
  };

  return (
    <Box>
      <Box
        display="flex"
        gap={{ base: 1, lg: 2 }}
        alignItems="center"
        justifyContent="center"
      >
        <hr style={{ width: "200px" }} />
        <Text fontSize={18}>Select Seats</Text>
        <hr style={{ width: "200px" }} />
      </Box>
      <Box
        display="flex"
        flexWrap={"wrap"}
        padding={2}
        alignItems="center"
        justifyContent="center"
      >
        {seatNumbers.map((seatNumber: any) => (
          <Seat
            occupied={occupied}
            seatNumber={seatNumber}
            key={seatNumber}
            onClick={handleNumberClick}
          />
        ))}
      </Box>
      <Box
        display={"flex"}
        flexDir={"column"}
        mt={1}
        justifyContent="center"
        alignItems={"center"}
        gap={1}
      >
        <Text mb={3}>Total Payment: {clickedNumbers.length * 40000}</Text>
        <Button
          bg={"#e1ad01"}
          colorScheme={"orange"}
          px={20}
          mb={5}
          w={{ base: "93%", lg: "90%" }}
          py={4}
          onClick={makePayment}
          isDisabled={
            !destination ||
            !timeOfTravel ||
            !dateOfTravel ||
            !phoneNumber ||
            phoneNumber.length < 10 ||
            clickedNumbers.length < 1
          }
        >
          {isLoading ? <Spinner /> : "Confirm Payment"}
        </Button>
      </Box>
      {/* <Box display={"flex"} alignItems="center" justifyContent={"center"}>
        {isLoading && (
          <Box
            bg="gray"
            opacity="0.9"
            position="fixed"
            top="0"
            bottom="0"
            left="0"
            right="0"
            zIndex="1000"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Spinner size="xl" color="white" />
          </Box>
        )}
      </Box> */}
    </Box>
  );
};

export default Seats;
