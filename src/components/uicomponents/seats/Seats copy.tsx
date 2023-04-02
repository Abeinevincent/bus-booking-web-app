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
    <div>sample</div>
  );
};

export default Seats;
