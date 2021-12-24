import './App.css';
import { 
  Flex,
  Heading,
  IconButton, 
  Spacer,
  VStack,
  Text, 
  Box,
  Image,
  Wrap,
  WrapItem,
  Center} from '@chakra-ui/react'
import {FaSun,FaMoon,FaInstagram,FaLinkedin} from 'react-icons/fa'
import {useColorMode} from '@chakra-ui/color-mode';
import {useMediaQuery} from '@chakra-ui/media-query';
// import Header from './components/Header';
import Profile from './components/Profile';
import MeImage from './resources/me.jpg'
import { useEffect } from 'react';
import { useToast } from '@chakra-ui/react'

function App() {

  const { colorMode,toggleColorMode } = useColorMode();
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  let isDark = colorMode === 'dark';
  const toast = useToast();

  useEffect(() => {
    console.log('in useEffect')
    toast({
      position:'bottom-right',
      title:'Welcome to my portfolio',
      status:'info',
      duration:2000,
      isClosable:false
    })
  },[])
  
  return (
    <div>
      <VStack>
        <Flex padding="5" width="100%" bgColor={isDark ? "white" : "#1a202c"}
        color={isDark ? "#1a202c" : "white"}>
          <Text fontSize={isNotSmallerScreen ? "3xl" : "2xl"} ml={isNotSmallerScreen ? "10" : 0}
          alignSelf={isNotSmallerScreen ? "flex-start" : "center"}>Portfolio</Text>
          
          {
            isNotSmallerScreen ? 
            <>
              <Spacer></Spacer>
              <IconButton backgroundColor={isDark ? "#1a202c" : "white"} color={isDark ? "white" : "#1a202c"} icon={isDark ? <FaSun /> : <FaMoon />} onClick={toggleColorMode} isRound="true"></IconButton>
            </>
          : null
          }
        </Flex>
        <Flex padding={isNotSmallerScreen ? "32" : "0"} 
        spacing="200px" 
        width="100%" 
        direction={isNotSmallerScreen ? "row" : "column"}>
          <Box width="65%" alignSelf="center" mt={isNotSmallerScreen ? 0 : 16}>
            <Text fontSize="4xl" fontWeight="semibold" alignSelf="flex-start">Hi, I am</Text>
            <Text 
            fontSize="6xl" 
            fontWeight="bold" 
            bgGradient="linear(to-r,cyan.400,blue.400,purple.400)" 
            bgClip="text" 
            alignSelf="self-start">Prajwal</Text>
            <Text fontSize="2xl" mr="5">Currently pursuing B.E at Visvesvaraya Technological University
            </Text>
          </Box>
          <Image 
          alignSelf="center"
          src={MeImage}
          borderRadius="full"
          height="250px"
          width="250px"
          mt={isNotSmallerScreen ? "0" : "12"}
          mb={isNotSmallerScreen ? "0" : "12"}></Image>
        </Flex>
        <Flex width="100%" spacing="200px" direction={isNotSmallerScreen ? "column" : "column"}>
          <Heading alignSelf="center" mb={12}>Projects</Heading>
          <Wrap alignSelf="center" spacing="25px" align="center" shouldWrapChildren="false">
            <WrapItem alignSelf="center">
              <Center _hover={{
                backgroundColor:"white",
                cursor:"pointer",
                transform:'scale(1.1)',
                color:'#1a202c'
              }} transition="all 300ms linear" w='200px' h='120px' bg="transparent" border="1px solid white">CLI-Reddit</Center>
            </WrapItem>
            <WrapItem>
              <Center w='200px' h='120px' bg='green.200'></Center>
            </WrapItem>
            <WrapItem>
              <Center w='200px' h='120px' bg='yellow.200'></Center>
            </WrapItem>
          </Wrap>
        </Flex>
      </VStack>
    </div>
    // <div className="App">
    //   <VStack padding="5">
    //     <Flex w="100%">
    //       <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
    //          Portfolio
    //       </Heading>
    //       <Spacer></Spacer>
    //       <IconButton
    //         ml="2"
    //         icon={<FaLinkedin />}
    //         onClick={() => window.location.href="https://www.linkedin.com/in/prajwal-ramesh-918a84187/"}
    //         isRound="true"
    //       ></IconButton>
    //       <IconButton
    //         ml="2"
    //         icon={<FaInstagram />}
    //         isRound="true"
    //       ></IconButton>
    //       <IconButton
    //         ml="8"
    //         icon={isDark ? <FaSun /> : <FaMoon />} 
    //         isRound="true" 
    //         onClick={toggleColorMode}>
    //       </IconButton>
    //     </Flex>
    //     <Header></Header>
    //     <Profile></Profile>
    //   </VStack>
    // </div>
  );
}

export default App;
