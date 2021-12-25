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
  Badge,
  Button} from '@chakra-ui/react'
import {FaSun,FaMoon,FaInstagram,FaLinkedin} from 'react-icons/fa'
import {useColorMode} from '@chakra-ui/color-mode';
import {useMediaQuery} from '@chakra-ui/media-query';
// import Header from './components/Header';
import Project from './components/Project';
import MeImage from './resources/me.jpg';
import About from './components/About'
import { useEffect } from 'react';
import { useToast } from '@chakra-ui/react'
import Skills from './components/Skills';

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
      <VStack backgroundColor={isDark ? "#252525" : "#16e7c7b8"}>
        <Flex padding="5" width="100%" bgColor={isDark ? "#08fdd8" : "#1d1d1d"}
        color={isDark ? "white" : "#10141c"}>
          <Text fontSize={isNotSmallerScreen ? "3xl" : "2xl"} ml={isNotSmallerScreen ? "10" : 0}
          alignSelf={isNotSmallerScreen ? "flex-start" : "center"} color={isDark ? "#1d1d1d" : "#08fdd8"}>Portfolio</Text>
          
          {
            isNotSmallerScreen ? 
            <>
              <Spacer></Spacer>
              <IconButton backgroundColor={isDark ? "#1a202c" : "white"} color={isDark ? "white" : "#1a202c"} icon={isDark ? <FaSun /> : <FaMoon />} onClick={toggleColorMode} isRound="true"></IconButton>
            </>
          : null
          }
        </Flex>
        <Flex padding={isNotSmallerScreen ? "32" : "12"} 
        spacing="200px" 
        width="100%" 
        direction={isNotSmallerScreen ? "column" : "column"}
        backgroundColor={isDark ? "#252525" : "#56edd6"}>
          <Box width="100%" alignSelf="center" mt={isNotSmallerScreen ? 0 : 16}>
            <Text fontFamily="font-file-82132" fontSize="6xl" fontWeight="semibold" alignSelf="flex-start">Hi, I'm</Text>
            <Text 
              fontFamily="font-file-82132"
              fontSize="6xl" 
              fontWeight="bold" 
              bgGradient={isDark ? "linear(to-r,cyan.400,blue.400,purple.400)" : "linear(to-r,cyan.800,blue.800,purple.800)" } 
              bgClip="text" 
              alignSelf="self-start">Prajwal Ramesh</Text>
            <Text fontFamily="font-file-82132" fontSize="3xl" mr="5" color={isDark ? "#08fdd8" : "#1d1d1d"}>Full Stack Developer
            </Text>
          </Box>
          <Button 
          alignSelf={isNotSmallerScreen ? "flex-start" :"center"} 
          mt="10" 
          width={isNotSmallerScreen ? "15%" : "50%"}
          _hover={{
            backgroundColor:isDark ? "white" : "#1d1d1d",
            color:isDark ? "#10141c" : "white",
            transform:"scale(1.1)"
          }}
          transition="all 300ms linear">Contact me</Button>
        </Flex>
        <Project />
        <About />
        <Skills />
      </VStack>
    </div>
  );
}

export default App;
