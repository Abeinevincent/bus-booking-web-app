import {
  Box,
  Button,
  Center,
  Flex,
  FormLabel,
  Heading,
  Image,
  Input,
  InputGroup,
  Select,
  Spinner,
  Text,
} from "@chakra-ui/react";
import Image1 from "../../../assets/images/globalimg1.png";
import { useEffect, useState } from "react";
import axios from "axios";
import Seats from "../seats/Seats";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Hero = () => {
  const [destination, setDestination] = useState("");
  const [dateOfTravel, setDateOfTravel] = useState("");
  const [timeOfTravel, setTimeOfTravel] = useState("");
  const [numberOfPassengers, setNumberOfPassengers] = useState<any>(1);
  const [seatNumber, setSeatNumber] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSeats, setShowSeats] = useState(false);
  const [showForm, setSowForm] = useState(true);
  const [clickedNumbers, setClickedNumbers] = useState<number[]>([]);

  const [viewNumber, setViewNumber] = useState(false);

  // GENERATE UNIQUE REFERENCE
  const generateRef = () => {
    let dt = new Date().getTime();
    let ref = "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      let r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    });
    return ref;
  };

  // CREATE BOOKING ************************************
  const createBooking = async () => {
    setIsLoading(true);

    setTimeout(() => {
      if (destination && numberOfPassengers && timeOfTravel && dateOfTravel) {
        console.log("All good!");
        setSowForm(false);
        setShowSeats(true);
      } else {
        console.log("Error, sth went wrong");
      }
      setIsLoading(false);
      toast.success("Success, select seats to continue!");
    }, 3000);
  };

  // Make Payment **********************************************
  const makePayment = async () => {
    setIsLoading(true);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_HOME_URL}/bookings`,
        {
          destination,
          dateOfTravel,
          timeOfTravel,
          numberOfPassengers,
          phoneNumber,
        }
      );
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_HOME_URL}/payments/payment`,
          {
            amount: 500,
            phoneNumber,
          }
        );
        console.log(res.data, "good boy");
        toast.success(
          "Success, a mobile money payment has been initiated on the provided phone number, confirm to get your ticket",
          {
            autoClose: 10000,
          }
        );
      } catch (err) {
        console.log(err);
      }
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }

    setTimeout(() => {
      if (phoneNumber && phoneNumber.length === 10) {
        console.log("All good!");
      } else {
        console.log("Error, sth went wrong");
      }
      setIsLoading(false);
    }, 3000);
  };

  return (
    <Flex h={"100vh"}>
      <Box
        display={{ base: "none", md: "none", lg: "flex" }}
        alignItems="center"
        justifyContent={"center"}
        flex={1}
        bg="#ccc"
        height={"100%"}
      >
        <Image
          boxSize="100%"
          height="100vh"
          style={{ height: "100vh" }}
          objectFit={"cover"}
          src={Image1}
          alt=""
        />
      </Box>
      {!showSeats && showForm && (
        <Box
          bg={"white"}
          color="black"
          h={"100%"}
          p={{ base: 1, lg: 5 }}
          pl={{ base: 2, lg: 20 }}
          flex={1}
        >
          <Box>
            <Text>Experience travel in style</Text>
            <Text overflow={"hidden"} color={"gray"} fontSize={25} my={1}>
              Book a Ticket Now
            </Text>
            <form>
              <Center
                flexDirection={"column"}
                w={{ base: "97%", lg: "90%" }}
                mb={1}
                h="100%"
              >
                <FormLabel alignSelf={"flex-start"}>
                  Leaving From<span style={{ color: "red" }}>*</span>
                </FormLabel>
                <InputGroup>
                  <Select
                    required
                    value={destination}
                    placeholder="--Select Journey--"
                    onChange={(e) => setDestination(e.target.value)}
                    w={{ base: "95%", lg: "80%" }}
                    size="lg"
                  >
                    <option
                      value={"Kampala - Mbarara"}
                      style={{
                        backgroundColor: "blue",
                        color: "white",
                      }}
                    >
                      Kampala - Mbarara
                    </option>
                    <option
                      style={{
                        backgroundColor: "blue",
                        color: "white",
                      }}
                      value={"Mbarara - Kampala"}
                    >
                      Mbarara - Kampala
                    </option>
                  </Select>
                </InputGroup>
              </Center>
              <Center
                flexDirection={"column"}
                w={{ base: "97%", lg: "90%" }}
                mb={1}
                h="100%"
              >
                <FormLabel alignSelf={"flex-start"}>
                  Travelling On<span style={{ color: "red" }}>*</span>
                </FormLabel>
                <InputGroup>
                  <Input
                    value={dateOfTravel}
                    onChange={(e) => {
                      if (dateOfTravel != null) {
                        setDateOfTravel(e.target.value);
                      }
                    }}
                    size={"lg"}
                    w={{ base: "95%", lg: "80%" }}
                    type="date"
                  />
                </InputGroup>
              </Center>
              <Center
                flexDirection={"column"}
                w={{ base: "97%", lg: "90%" }}
                mb={1}
                h="100%"
              >
                <FormLabel alignSelf={"flex-start"}>
                  Select Preffered Time<span style={{ color: "red" }}>*</span>
                </FormLabel>
                <InputGroup>
                  <Select
                    placeholder="--Select Time--"
                    size={"lg"}
                    w={{ base: "95%", lg: "80%" }}
                    value={timeOfTravel}
                    onChange={(e) => {
                      if (timeOfTravel != null) {
                        setTimeOfTravel(e.target.value);
                      }
                    }}
                    required
                  >
                    <option
                      style={{ backgroundColor: "blue", color: "white" }}
                      value={"2:30 pm"}
                    >
                      2:30 pm
                    </option>
                    <option
                      style={{ backgroundColor: "blue", color: "white" }}
                      value={"10:00 pm"}
                    >
                      10:00 pm
                    </option>
                  </Select>
                </InputGroup>
              </Center>
              <Center
                flexDirection={"column"}
                w={{ base: "97%", lg: "90%" }}
                mb={1}
                h="100%"
              >
                <FormLabel alignSelf={"flex-start"}>
                  Enter Number of Passengers
                  <span style={{ color: "red" }}>*</span>
                </FormLabel>
                <InputGroup>
                  <Input
                    type="number"
                    value={numberOfPassengers}
                    onChange={(e) => setNumberOfPassengers(e.target.value)}
                    w={{ base: "95%", lg: "80%" }}
                    size={"lg"}
                  />
                </InputGroup>
              </Center>

              <Button
                bg={"#e1ad01"}
                colorScheme={"orange"}
                px={20}
                mb={5}
                w={{ base: "93%", lg: "40%" }}
                py={4}
                onClick={createBooking}
                isDisabled={
                  !destination ||
                  !numberOfPassengers ||
                  !timeOfTravel ||
                  !dateOfTravel
                }
              >
                Continue
              </Button>
              <ToastContainer />
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
            </form>
          </Box>
        </Box>
      )}

      {/* Show seats */}
      {showSeats && !viewNumber && (
        <Box
          bg={"darkblue"}
          color="white"
          h={"100%"}
          p={{ base: 1, lg: 5 }}
          pl={{ base: 2, lg: 20 }}
          flex={1}
          display="flex"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Seats
            clickedNumbers={clickedNumbers}
            setClickedNumbers={setClickedNumbers}
            setSowForm={setSowForm}
            setShowSeats={setShowSeats}
            setViewNumber={setViewNumber}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        </Box>
      )}

      {/* Set Phone Number Input to visible */}
      {viewNumber && (
        <Box
          bg={"darkblue"}
          color="white"
          h={"100%"}
          p={{ base: 2, lg: 5 }}
          pl={{ base: 5, lg: 20 }}
          flex={1}
          display="flex"
          alignItems={"center"}
          justifyContent="center"
        >
          <form>
            <Center
              flexDirection={"column"}
              w={{ base: "97%", lg: "90%" }}
              mb={3}
              h="100%"
            >
              <Text alignSelf={"flex-start"} mb={3}>
                Total Payment: {clickedNumbers.length * 40000}
              </Text>
              <FormLabel alignSelf={"flex-start"} mb={2}>
                Enter Phone Number
                <span style={{ color: "red" }}>*</span>
              </FormLabel>
              <InputGroup>
                <Input
                  value={phoneNumber}
                  placeholder="E.g 0779924304"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  w={{ base: "95%", lg: "100%" }}
                  size={"lg"}
                  required
                  maxLength={10}
                  minLength={10}
                />
              </InputGroup>
            </Center>
            <ToastContainer />
            <Button
              bg={"#e1ad01"}
              colorScheme={"orange"}
              px={20}
              w={{ base: "93%", lg: "90%" }}
              py={4}
              onClick={makePayment}
              isDisabled={!phoneNumber || phoneNumber.length !== 10}
            >
              Confirm Payment
            </Button>
            <ToastContainer />
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
          </form>
        </Box>
      )}
    </Flex>
  );
};

export default Hero;
