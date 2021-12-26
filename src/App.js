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
import { useEffect, useRef } from 'react';
import { useToast } from '@chakra-ui/react'
import Skills from './components/Skills';
import Contact from './components/Contact';
import {motion} from 'framer-motion';


function App() {
  
  const contactRef = useRef(null);
  const MotionText = motion(Text);
  const MotionButton = motion(Button);
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
  
  const scrollTo = (givenRef) => {
    window.scrollTo(0,givenRef.current.offsetTop)
  }

  return (
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
      backgroundColor={isDark ? "#252525" : "#16e7c7b8"}>
        <Flex 
        padding="5" 
        width="100%" 
        bgColor={isDark ? "#08fdd8" : "#1d1d1d"}
        color={isDark ? "white" : "#10141c"}>
          <Text 
          fontSize={isNotSmallerScreen ? "3xl" : "lg"} 
          ml={isNotSmallerScreen ? "10" : 0}
          alignSelf={isNotSmallerScreen ? "flex-start" : "center"} 
          color={isDark ? "#1d1d1d" : "#08fdd8"}>Welcome</Text>
          
          {
            isNotSmallerScreen ? 
            <>
              <Spacer></Spacer>
              <IconButton 
              backgroundColor={isDark ? "#1a202c" : "white"} 
              color={isDark ? "white" : "#1a202c"} 
              icon={isDark ? <FaSun /> : <FaMoon />} 
              onClick={toggleColorMode} 
              isRound="true"></IconButton>
            </>
          : null
          }
        </Flex>
        <Flex 
        padding={isNotSmallerScreen ? "32" : "12"} 
        spacing="200px" 
        width="100%" 
        direction={isNotSmallerScreen ? "column" : "column"}
        backgroundColor={isDark ? "#252525" : "#56edd6"}>
          <Box 
          width="100%" 
          alignSelf="center" 
          mt={isNotSmallerScreen ? 0 : 16}>
            <MotionText 
            initial={{
              x:'-100vw'
            }}
            animate={{
              x:0
            }}
            transition={{
              delay:1,
              duration:0.5,
              type:"spring",
              stiffness:120
            }}
             fontSize={isNotSmallerScreen ? "6xl" : "2xl"} 
            fontWeight="semibold" 
            alignSelf="flex-start">Hi, I'm</MotionText>
            <MotionText  
              initial={{
                x:'-100vw',
                opacity:0
              }}
              animate={{
                x:0,
                opacity:1
              }}
              transition={{
                delay:1.2,
                duration:0.5,
                type:"spring",
                stiffness:120
              }}
              mt={isNotSmallerScreen ? 0 : "2"}
              mb={isNotSmallerScreen ? 0 : "5"}
              
              fontSize={isNotSmallerScreen ? "6xl" : "lg"} 
              fontWeight="bold" 
              bgGradient={isDark ? "linear(to-r,cyan.400,blue.400,purple.400)" : "linear(to-r,cyan.800,blue.800,purple.800)" } 
              bgClip="text" 
              alignSelf="self-start">
              <motion.span 
                initial={{
                  x:-'100vw'
                }}
                animate={{x:0}}
                transition={{duration:0.5, delay:1, type:'spring',stiffness:120}}
                className="letter">P</motion.span>
                <span className="letter">R</span>
                <span className="letter">A</span>
                <span className="letter">J</span>
                <span className="letter">W</span>
                <span className="letter">A</span>
                <span className="letter">L</span>
                <span> </span>
                <span className="letter">R</span>
                <span className="letter">A</span>
                <span className="letter">M</span>
                <span className="letter">E</span>
                <span className="letter">S</span>
                <span className="letter">H</span>
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
                duration:0.5,
                type:"spring",
                stiffness:120
              }}
               
              fontSize={isNotSmallerScreen ? "3xl" : "2xl" } 
              mr="5" 
              color={isDark ? "#08fdd8" : "#1d1d1d"}>Full Stack Developer
            </MotionText>
          </Box>
          <MotionButton
          onClick={() => scrollTo(contactRef)} 
          initial={{opacity:0}} 
          animate={{opacity:1}} 
          transition={{delay:1.3, duration:0.5}}
          alignSelf={isNotSmallerScreen ? "flex-start" :"center"} 
          mt="10" 
          width={isNotSmallerScreen ? "15%" : "50%"}
          _hover={{
            backgroundColor:isDark ? "white" : "#1d1d1d",
            color:isDark ? "#10141c" : "white",
            transform:"scale(1.1)"
          }}
          transition="all 300ms linear">Contact me</MotionButton>
        </Flex>
        <Project />
        <About />
        <Skills />
        <Contact refernce={contactRef}/>
      </VStack>
    </motion.div>
  );
}

export default App;