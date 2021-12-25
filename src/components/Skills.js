import React,{useEffect} from 'react'
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
  const animationText = useAnimation();
  const animationProgress = useAnimation();
  const [refHeading,inViewHeading] = useInView({triggerOnce:true,threshold:0.55});
  const MotionHeading = motion(Heading);
  const MotionProgress = motion(Progress);
  const MotionText = motion(Text);
  const { colorMode,toggleColorMode } = useColorMode();
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  let isDark = colorMode === 'dark';

  useEffect(() => {
    if(inViewHeading){
      console.log(inViewHeading);
      animationHeading.start({
        opacity:1,
        x:20,
        transition:{
          delay:0.25,
          duration:1
        }
      });
      animationText.start({
        opacity:1,
        y:0,
        transition:{
          delay:0.25,
          duration:1
        }
      });
      // animationProgress.start({
      //   va
      // })
    }
  },[inViewHeading])

  return (
    <Flex 
      backgroundColor={isDark ? "#1d1d1d" : "#16e7c7b8"}  
      width="100%" 
      direction={isNotSmallerScreen ? "row" : "column"}>
        <Box 
          mt="20" 
          width={isNotSmallerScreen ? "40%" : "100%"}>
          <MotionHeading 
            initial={{opacity:0,x:0}} 
            animate={animationHeading} 
            ref={refHeading}
            fontSize={isNotSmallerScreen ? "3xl" : "lg"}
            ml={isNotSmallerScreen ? "24" : "2"}
            alignSelf="flex-start" 
            color={isDark ? "#08fdd8" : "#1d1d1d"} 
            fontFamily="font-file-82132">
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
            ml={isNotSmallerScreen ? "24" : "4"} 
            mt="6" 
            fontSize="lg" 
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
              value={inViewHeading ? 50 : 0} 
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
            <Progress 
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
