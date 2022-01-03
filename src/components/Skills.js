import React,{useEffect,useRef} from 'react'
import { 
  Flex,
  Heading,
  Text, 
  Box,
  Progress} from '@chakra-ui/react';
import {useColorMode} from '@chakra-ui/color-mode';
import {useMediaQuery} from '@chakra-ui/media-query';
import {useInView} from 'react-intersection-observer';
import {motion,useAnimation} from 'framer-motion'

export default function Skills() {

  const animationHeading = useAnimation();
  const animationFront = useAnimation();
  const animationText = useAnimation();
  const animationProgress = useAnimation();
  const [refHeading,inViewHeading] = useInView({triggerOnce:true,threshold:0.45});
  const MotionHeading = motion(Heading);
  const MotionProgress = motion(Progress);
  const MotionText = motion(Text);
  const { colorMode,toggleColorMode } = useColorMode();
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  const [isNotmediumScreen] = useMediaQuery("(min-width:1100px)");
  let isDark = colorMode === 'dark';

  useEffect(() => {
    console.log(inViewHeading);
    if(inViewHeading){
      animationHeading.start({
        opacity:1,
        x:0,
        transition:{
          delay:0.25,
          duration:0.8
        }
      });
      animationText.start({
        opacity:1,
        y:0,
        transition:{
          delay:0.25,
          duration:0.8
        }
      });
    }
  },[animationHeading, animationText, inViewHeading])

  return (
    <Flex 
      paddingBottom="10"
      backgroundColor={isDark ? "#1f2833" : "#8ee4af"}  
      width="100%" 
      direction={isNotSmallerScreen ? "row" : "column"}>
        <Box 
          mt="20" 
          width={isNotSmallerScreen ? "40%" : "100%"}>
          <MotionHeading 
            initial={{opacity:0,x:-40}} 
            animate={animationHeading} 
            ref={refHeading}
            fontSize={isNotSmallerScreen ? "20px" : "lg"}
            ml={isNotSmallerScreen ? "14" : "2"}
            alignSelf="flex-start" 
            color={isDark ? "#66fcf1" : "#05386B"}  >
              <span className='letter'>S</span>
              <span className='letter'>k</span>
              <span className='letter'>i</span>
              <span className='letter'>l</span>
              <span className='letter'>l</span>
              <span className='letter'>s</span>
              <span> </span>
              <span className='letter'>&</span>
              <span> </span>
              <span className='letter'>E</span>
              <span className='letter'>x</span>
              <span className='letter'>p</span>
              <span className='letter'>e</span>
              <span className='letter'>r</span>
              <span className='letter'>i</span>
              <span className='letter'>e</span>
              <span className='letter'>n</span>
              <span className='letter'>c</span>
              <span className='letter'>e</span>
          </MotionHeading>
          <MotionText
            initial={{opacity:0,y:100}} 
            animate={animationText}
            ml={isNotSmallerScreen ? "14" : "4"} 
            mt="4" 
            fontSize={isNotmediumScreen ? "lg" : "md"} 
            mr="6">
                Since beginning my journey as a Full-Stack developer, I’ve done several personal projects which I unfortunatley lost, and collaborated with talented people to create web products.
                I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, React, CSS, Chakra-UI and Material UI building small and medium web apps, and small packages, animations, and coding interactive layouts.
                Visit my LinkedIn profile for more details
          </MotionText>
        </Box>
        <Flex 
          ml={isNotSmallerScreen ? "24" : 0} 
          direction="column" 
          alignItems={isNotSmallerScreen ? "flex-start" : "center"} 
          justifyContent="center" mt="20" 
          width={isNotSmallerScreen ? "60%" : "100%"}>
            <Text 
              fontSize="lg" 
              mb="2">React</Text>
            <MotionProgress 
              colorScheme="cyan" 
              width="80%" 
              value={30}
              size="xs" />
            <Text 
              mt="10" 
              fontSize="lg" 
              mb="2">NodeJS</Text>
            <Progress 
              colorScheme="whatsapp" 
              width="80%" value={40} 
              size="xs" />
            <Text 
              mt="10" 
              fontSize="lg" 
              mb="2">Frontend</Text>
            <MotionProgress 
              initial={{value:0}}
              animate={animationFront}
              colorScheme="red" 
              width="80%"
              value={35}
              size="xs" />
            <Text 
              mt="10" 
              fontSize="lg" 
              mb="2">Backend</Text>
            <Progress 
              mb="10" 
              colorScheme="purple" 
              width="80%" 
              value={40} 
              size="xs" />
        </Flex>
    </Flex>
  )
}
