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
import { useState } from "react";
import axios from "axios";
import Seats from "../seats/Seats";

const Hero = () => {
  const [destination, setDestination] = useState("");
  const [dateOfTravel, setDateOfTravel] = useState("");
  const [timeOfTravel, setTimeOfTravel] = useState("");
  const [numberOfPassengers, setNumberOfPassengers] = useState<any>(1);
  const [seatNumber, setSeatNumber] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSeats, setShowSeats] = useState(false);

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
      setIsLoading(false);
    }, 2000);

    try {
      const res = await axios.post("http://localhost:8800/api/bookings", {
        destination,
        dateOfTravel,
        timeOfTravel,
        numberOfPassengers,
        phoneNumber,
      });
      try {
        const res = await axios.post(`${import.meta.env.VITE_PAYMENT_URL}`, {
          amount: 500,
          contact: phoneNumber,
          username: import.meta.env.VITE_PAYMENT_URL,
          api_key: import.meta.env.VITE_PAYMENT_URL,
          transaction_reference: generateRef(),
          narrative: import.meta.env.VITE_PAYMENT_URL,
          ipn_url: import.meta.env.VITE_PAYMENT_URL,
          fpn_url: import.meta.env.VITE_PAYMENT_URL,
        });
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
      console.log(res.data);
      // setShowSeats(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Flex h={"100vh"}>
      <Box
        display={{ base: "none", lg: "flex" }}
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
      {!showSeats && (
        <Box
          bg={"darkblue"}
          color="white"
          h={"100%"}
          p={{ base: 2, lg: 5 }}
          pl={{ base: 5, lg: 20 }}
          flex={1}
        >
          <Box>
            <Text>Experience travel in style</Text>
            <Heading overflow={"hidden"} my={3}>
              Book a ticket now
            </Heading>
            <form>
              <Center
                flexDirection={"column"}
                w={{ base: "97%", lg: "90%" }}
                mb={3}
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
                mb={3}
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
                mb={3}
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
                mb={3}
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
              <Center
                flexDirection={"column"}
                w={{ base: "97%", lg: "90%" }}
                mb={3}
                h="100%"
              >
                <FormLabel alignSelf={"flex-start"}>
                  Enter Phone Number
                  <span style={{ color: "red" }}>*</span>
                </FormLabel>
                <InputGroup>
                  <Input
                    value={phoneNumber}
                    placeholder="E.g 0779924304"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    w={{ base: "95%", lg: "80%" }}
                    size={"lg"}
                    required
                    maxLength={10}
                    minLength={10}
                  />
                </InputGroup>
              </Center>
              <Button
                bg={"#e1ad01"}
                colorScheme={"orange"}
                px={20}
                w={{ base: "93%", lg: "40%" }}
                py={4}
                onClick={createBooking}
                isDisabled={
                  !destination ||
                  !numberOfPassengers ||
                  !timeOfTravel ||
                  !dateOfTravel ||
                  !phoneNumber
                }
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
            </form>
          </Box>
        </Box>
      )}
      {showSeats && (
        <Box
          bg={"darkblue"}
          color="white"
          h={"100%"}
          p={{ base: 2, lg: 5 }}
          pl={{ base: 5, lg: 20 }}
          flex={1}
          display="flex"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Seats />
        </Box>
      )}
    </Flex>
  );
};

export default Hero;
