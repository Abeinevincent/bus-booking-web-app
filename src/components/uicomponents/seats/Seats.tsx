import { Box, Button, Spinner, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Seat from "./Seat";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type SeatsProps = {
  setViewNumber: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setShowSeats: React.Dispatch<React.SetStateAction<boolean>>;
  setSowForm: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  clickedNumbers: number[];
  setClickedNumbers: React.Dispatch<React.SetStateAction<number[]>>;
};

const Seats = ({
  setViewNumber,
  setIsLoading,
  isLoading,
  setShowSeats,
  clickedNumbers,
  setClickedNumbers,
  setSowForm,
}: SeatsProps) => {
  const [occupied, setOccupied] = useState(false);
  const [seatNumbers, setSeatNumbers] = useState<number[]>([]);

  useEffect(() => {
    toast.success("Success, select your seats to continue!");
  }, []);

  // useEffect hook to update state variable on component mount
  useEffect(() => {
    let arr = [];
    for (let i = 1; i <= 40; i++) {
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

  // Proceed to payment
  const handleProceedToPayment = () => {
    setIsLoading(true);

    setTimeout(() => {
      if (clickedNumbers) {
        console.log("All good!");
        setShowSeats(false);
        setSowForm(false);
        setViewNumber(true);
        toast.success("Success, enter your phone number to continue!");
      } else {
        console.log("Error, sth went wrong");
      }
      setIsLoading(false);
    }, 3000);
  };

  return (
    <Box>
      <ToastContainer />
      <Box
        display="flex"
        gap={{ base: 2, lg: 4 }}
        alignItems="center"
        justifyContent="center"
      >
        <hr style={{ width: "200px" }} />
        <Text fontSize={18}>Select Your Seats</Text>
        <hr style={{ width: "200px" }} />
      </Box>
      <Box
        display="flex"
        flexWrap={"wrap"}
        padding={5}
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
      <Box display={"flex"} alignItems="center" justifyContent={"center"}>
        <Button
          bg={"#e1ad01"}
          colorScheme={"orange"}
          px={20}
          w={{ base: "93%", lg: "40%" }}
          py={4}
          onClick={handleProceedToPayment}
          isDisabled={clickedNumbers.length < 1}
        >
          Continue
        </Button>
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
      </Box>
    </Box>
  );
};

export default Seats;
