import './App.css';
import { 
  Flex,
  IconButton, 
  Spacer,
  VStack,
  Text, 
  Box,
  Button} from '@chakra-ui/react'
import {FaSun,FaMoon} from 'react-icons/fa'
import {useColorMode} from '@chakra-ui/color-mode';
import {useMediaQuery} from '@chakra-ui/media-query';
// import Header from './components/Header';
import Project from './components/Project';
import MeImage from './resources/me.jpg';
import About from './components/About'
import { useEffect, useRef,useState } from 'react';
import { useToast } from '@chakra-ui/react'
import Skills from './components/Skills';
import Contact from './components/Contact';
import {motion} from 'framer-motion';
import Typewriter from 'typewriter-effect';
import Loader from './components/Loader';


function App() {
  
  const [loader,isLoaderTrue] = useState(true);
  const contactRef = useRef(null);
  const MotionText = motion(Text);
  const MotionButton = motion(Button);
  const { colorMode,toggleColorMode } = useColorMode();
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  const [isNotmediumScreen] = useMediaQuery("(min-width:1100px)");
  let isDark = colorMode === 'dark';
  const toast = useToast();

  // useEffect(() => {
  //   console.log('in useEffect')
  //   toast({
  //     position:'bottom-right',
  //     title:'Welcome to my portfolio',
  //     status:'info',
  //     duration:2000,
  //     isClosable:false
  //   })
  // },[])
  
  const scrollTo = (givenRef) => {
    window.scrollTo(0,givenRef.current.offsetTop)
  }

  const loaderFunc = () => {
    setTimeout(() => {
      isLoaderTrue(false);
    },4000)
    return <Loader />
  }

  return (
    <div>
      {
        loader === true 
          ? 
          loaderFunc()
          :
      <motion.div className="home"
        
        initial={{
          opacity:0
        }}
        animate={{
          opacity:1
        }}
        transition={{
          duration:2,
        }}
      >
        
        <VStack 
        backgroundColor={isDark ? "#0b0c10" : "#5cdb95"}>
          <Flex 
          padding="5" 
          width="100%" 
          // background={isDark ? "linear-gradient(80deg,rgb(0, 199, 199),rgb(0, 109, 109));" : "linear-gradient(80deg,rgb(54,76,76),rgb(19,42,42));"}
          background={isDark ? "#66fcf1" : "#05386B"}
          color={isDark ? "white" : "#10141c"}>
            <Text 
            fontFamily="'Sora', sans-serif"
            fontWeight="thin"
            fontSize={isNotSmallerScreen ? "3xl" : "lg"} 
            ml={isNotSmallerScreen ? "10" : 0}
            alignSelf={isNotSmallerScreen ? "flex-start" : "center"} 
            color={isDark ? "#1d1d1d" : "#edf5e1"}>Welcome</Text>
            
            {/* {
              isNotSmallerScreen ?  */}
              <>
                <Spacer></Spacer>
                <IconButton 
                backgroundColor={isDark ? "#1a202c" : "#f2f2f2"} 
                color={isDark ? "white" : "#1a202c"} 
                icon={isDark ? <FaSun /> : <FaMoon />} 
                onClick={toggleColorMode} 
                isRound="true"></IconButton>
              </>
            {/* : null
            } */}
          </Flex>
          <Flex 
          padding={isNotSmallerScreen ? (isNotmediumScreen ? "32" : "24") : "12"} 
          spacing="200px" 
          width="100%" 
          direction={isNotSmallerScreen ? "column" : "column"}
          backgroundColor={isDark ? "#0b0c10" : "#5cdb95"}>
            <Box 
            width="100%" 
            alignSelf="center" 
            mt={isNotSmallerScreen ? 0 : 16}>
              <MotionText 
              fontFamily="'Sora', sans-serif"
              initial={{
                x:'-100vw'
              }}
              animate={{
                x:0
              }}
              transition={{
                delay:1,
                duration:0.25,
                type:"spring",
                stiffness:120
              }}
              fontSize={isNotSmallerScreen ? (isNotmediumScreen ? "6xl" : "3xl") : "2xl"} 
              fontWeight="semibold" 
              alignSelf="flex-start">Hi, I'm</MotionText>
              <MotionText
                mt={isNotSmallerScreen ? 0 : "2"}
                mb={isNotSmallerScreen ? 0 : "5"}
                
                fontSize={isNotSmallerScreen ? (isNotmediumScreen ? "6xl" :  "3xl") : "lg"} 
                fontWeight="bold" 
                // bgGradient={isDark ? "linear(to-r,cyan.400,blue.400,purple.400)" : "linear(to-r,cyan.800,blue.800,purple.800)" } 
                // bgClip="text" 
                alignSelf="self-start">
                <div className="name">
                  <h1 className={isDark ? 'myname_dark' : "myname"}>PRAJWAL RAMESH</h1>
                </div>
                  </MotionText>
              <MotionText
                initial={{
                  y:100,
                  opacity:0
                }}
                animate={{
                  y:0,
                  opacity:1
                }}
                transition={{
                  delay:1.3,
                  duration:0.25,
                  type:"spring",
                  stiffness:120
                }}
                
                fontSize={isNotSmallerScreen ? (isNotmediumScreen ? "3xl" : "2xl") : "lg" } 
                mr="5" 
                color={isDark ? "#08fdd8" : "#1d1d1d"}>
                  <Typewriter
                  fontFamily="'Sora', sans-serif"
                    options={{
                      strings: ['Student', 'Developer','No Michael no!!'],
                      autoStart: true,
                      loop: true,
                      delay:2,
                      deleteSpeed:1.5
                    }}
                  />
              </MotionText>
            </Box>
            <MotionButton
            fontFamily="'Sora', sans-serif"
            backgroundColor={isDark ? "#66fcf1" : "#edf5e1"}
            color={isDark ? "black" : "#05386B"}
            onClick={() => scrollTo(contactRef)} 
            initial={{opacity:0}} 
            animate={{opacity:1}} 
            alignSelf={isNotSmallerScreen ? "flex-start" :"center"} 
            mt="10" 
            width={isNotSmallerScreen ? (isNotmediumScreen ? "15%" : "35%") : "50%"}
            _hover={{
              backgroundColor:isDark ? "white" : "white",
              color:isDark ? "#10141c" : "#05386B",
              transform:"scale(1.1)"
            }}
            transition="all 300ms linear"
            >Contact me</MotionButton>
          </Flex>
          <Project />
          <About />
          <Skills />
          <Contact refernce={contactRef}/>
        </VStack>
      </motion.div>
      }
    </div>
  );
}

export default App;
