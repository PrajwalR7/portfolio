import React,{useEffect} from 'react'
import { 
  Flex,
  Heading,
  VStack,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  Textarea,
  Box,
  Button,
  Text} from '@chakra-ui/react'
import {FaPersonBooth} from 'react-icons/fa'
import {useColorMode} from '@chakra-ui/color-mode';
import {useMediaQuery} from '@chakra-ui/media-query';
import {FaLinkedin,FaInstagram,FaStackOverflow,FaGithub} from 'react-icons/fa'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import {useInView} from 'react-intersection-observer';
import {motion,useAnimation} from 'framer-motion'

export default function Contact(props) {

  const { colorMode,toggleColorMode } = useColorMode();
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  const [isNotmediumScreen] = useMediaQuery("(min-width:1100px)");
  let isDark = colorMode === 'dark';
  const MotionBox = motion(Box);
  const {ref,inView} = useInView({triggerOnce:true,threshold:0.45});
  const animation = useAnimation();

  useEffect(() => {
    if(inView){
      animation.start({
        opacity:1,
        transition:{
          duration:1.2,
          delay:0.15
        }
      })
    }
  },[inView])

  return (
    <Flex justify="center" ref={props.refernce} width="100%" direction={isNotSmallerScreen && isNotmediumScreen ? "row" :  "column"}
    wrap={isNotmediumScreen && isNotSmallerScreen ? "wrap" : "nowrap"}
    >
      <VStack width={isNotSmallerScreen && isNotmediumScreen ?  "50%" : "100%"}>
        <Heading mb="4" mt="10" fontSize={isNotSmallerScreen ? "3xl" : "lg"}  
        color={isDark ? "#66fcf1" : "#05386B"} >
          <span className="letter">C</span>
          <span className="letter">o</span>
          <span className="letter">n</span>
          <span className="letter">t</span>
          <span className="letter">a</span>
          <span className="letter">c</span>
          <span className="letter">t</span>
          <span> </span>
          <span className="letter">M</span>
          <span className="letter">e</span>
        </Heading>
        <Flex 
        width="100%" 
        direction={isNotSmallerScreen ? "column" : "column"}
        // justifyContent={isNotSmallerScreen ? "space-around" : ""} 
        // verticalAlign={isNotSmallerScreen ? "" : "center"}
        >
          <Box p="8" alignSelf="center" width="100%">
            <Text fontSize="lg" alignSelf="center">I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form.</Text>
          </Box>
          <Flex 
          direction={isNotSmallerScreen ? "row" : 'column'}
          width="100%"
          wrap="wrap"
          >
            <InputGroup width={isNotSmallerScreen ? "49%" : "100%"} p="2" alignSelf="center">
              <Input 
              focusBorderColor=""
              color="white"
              backgroundColor={isDark ? "#1d1d1d" : "white"}
              outlineOffset={0}
              colorScheme={isDark ? "#08fdd8" : "#1d1d1d"}
              // outlineColor={isDark ? "#08fdd8" : "#1d1d1d"}
              type="text" placeholder='Name' width="100%" size="lg"/>
            </InputGroup>
            <InputGroup width={isNotSmallerScreen ? "49%" : "100%"} p="2" alignSelf="center" >
              <Input
              focusBorderColor=""
              color="white"
              backgroundColor={isDark ? "#1d1d1d" : "white"}
              outlineOffset={0}
              colorScheme={isDark ? "#08fdd8" : "#1d1d1d"}
              // outlineColor={isDark ? "#08fdd8" : "#1d1d1d"}
              type="email" placeholder='Email' width="100%" size="lg"/>
            </InputGroup>
            <InputGroup  width={isNotSmallerScreen ? "98%" : "100%"} p="2" alignSelf="center" >
              <Input
              focusBorderColor=""
              color="white"
              backgroundColor={isDark ? "#1d1d1d" : "white"}
              outlineOffset={0}
              colorScheme={isDark ? "#08fdd8" : "#1d1d1d"}
              // outlineColor={isDark ? "#08fdd8" : "#1d1d1d"}
              type="text" placeholder='Subject' size="lg"/>
            </InputGroup>
            <Textarea 
            focusBorderColor=""
            color="white"
            backgroundColor={isDark ? "#1d1d1d" : "white"}
            outlineOffset={0}
            colorScheme={isDark ? "#08fdd8" : "#1d1d1d"}
            // outlineColor={isDark ? "#08fdd8" : "#1d1d1d"}
            placeholder='Message' width={isNotSmallerScreen ? "96.5%" : "97.5%"} ml={isNotSmallerScreen ? "2" : "0"}
            alignSelf="center" mt="2"></Textarea>
            <Button
            fontSize={isNotmediumScreen ? "" : "sm"}
            backgroundColor={isDark ? "#66fcf1" : "#edf5e1"}
            color={isDark ? "black" : "#05386B"}
            fontFamily="'Sora', sans-serif"
            mb="10"
            _hover={{
              backgroundColor:isDark ? "white" : "#1d1d1d",
              color:isDark ? "#10141c" : "white",
              transform:"translate(8px,0) scale(1.1)"
            }}
            transform={'translateX(8px)'} mt="6" alignSelf={isNotSmallerScreen ? "flex-start" : "center" } justify="flex-start" p={isNotmediumScreen ? "6" : "3"}>Send Message!</Button>
            <Flex width="100%" direction="row" justify="center">
              <Icon 
               _hover={{
                color:isDark ? "#08fdd8" : 'white',
                cursor:'pointer',
                transform:'scale(1.1)'
              }} 
              transition="all 200ms linear"
              w={isNotSmallerScreen? (isNotmediumScreen ? "40px" : "30px") : "30px"} h={isNotSmallerScreen? "40px" : "30px"} margin={isNotSmallerScreen ? (isNotmediumScreen ? "10" : "6") : "4"}
              onClick={() => window.location.href="https://github.com/PrajwalR7"} as={FaGithub} />
              <Icon 
               _hover={{
                color:isDark ? "#08fdd8" : 'white',
                cursor:'pointer',
                transform:'scale(1.1)'
              }} 
              transition="all 200ms linear"
              w={isNotSmallerScreen? (isNotmediumScreen ? "40px" : "30px")  : "30px"} h={isNotSmallerScreen? "40px" : "30px"} margin={isNotSmallerScreen ? (isNotmediumScreen ? "10" : "6") : "4"} 
              onClick={() => window.location.href="https://www.linkedin.com/in/prajwal-ramesh-918a84187/"} as={FaLinkedin} />
              <Icon 
               _hover={{
                color:isDark ? "#08fdd8" : 'white',
                cursor:'pointer',
                transform:'scale(1.1)'
              }} 
              transition="all 200ms linear"
              w={isNotSmallerScreen? (isNotmediumScreen ? "40px" : "30px")  : "30px"} h={isNotSmallerScreen? "40px" : "30px"} margin={isNotSmallerScreen ? (isNotmediumScreen ? "10" : "6") : "4"}
              onClick={() => window.location.href="https://stackoverflow.com/users/16412216/prajwal-ramesh"} as={FaStackOverflow} />
              <Icon 
               _hover={{
                color:isDark ? "#08fdd8" : 'white',
                cursor:'pointer',
                transform:'scale(1.1)'
              }} 
              transition="all 200ms linear"
              w={isNotSmallerScreen? (isNotmediumScreen ? "40px" : "30px")  : "30px"} h={isNotSmallerScreen? "40px" : "30px"} margin={isNotSmallerScreen ? (isNotmediumScreen ? "10" : "6") : "4"} as={FaInstagram} />
            </Flex>
          </Flex>
        </Flex>
      </VStack>

      <MotionBox
      ref={ref}
      // initial={{opacity:0}}
      // animate={animation} 
      mt={isNotSmallerScreen ? 0 : "5"}>
        <MapContainer 
        center={[12.97, 77.59]} 
        zoom={10} 
        scrollWheelZoom={false}>
          <TileLayer
            attribution='© <a href="https://stadiamaps.com/">Stadia Maps</a>'
            url={!(colorMode === 'dark') ? 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png' 
             : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" }
          />
          <Marker 
          position={[12.97, 77.59]}>
            <Popup>
              This is where I live :)
            </Popup>
          </Marker>
        </MapContainer>
      </MotionBox>
    </Flex>
  )
}
