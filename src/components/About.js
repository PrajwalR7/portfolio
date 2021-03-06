import { 
  Flex,
  Heading,
  Text, 
  Box,
  Image,} from '@chakra-ui/react'
import React,{useEffect} from 'react';
import {useColorMode} from '@chakra-ui/color-mode';
import {useMediaQuery} from '@chakra-ui/media-query';
import { useToast } from '@chakra-ui/react';
import Tech from '../resources/Tech.svg';
import "../App.css"
import {useInView} from 'react-intersection-observer';
import {motion,useAnimation} from 'framer-motion'

export default function About() {
  const [refHeading,inViewHeading] = useInView({triggerOnce:true,threshold:0.35});
  // const [refText,inViewText] = useInView({triggerOnce:true,threshold:0.25});
  const animationHeading = useAnimation();
  const animationText = useAnimation();
  const animationImg = useAnimation();

  useEffect(() => {
    if(inViewHeading){
      console.log(inViewHeading);
      animationHeading.start({
        opacity:1,
        x:0,
        transition:{
          delay:0.15,
          duration:0.6
        }
      });
      animationText.start({
        opacity:1,
        y:0,
        transition:{
          delay:0.15,
          duration:0.6
        }
      });
      animationImg.start({
        opacity:1,
        y:0,
        transition:{
          duration:0.6,
          delay:0.15
        }
      })
    }
  },[inViewHeading])

  const MotionHeading = motion(Heading);
  const MotionText = motion(Text);
  const MotionFlex = motion(Flex);
  const MotionBox = motion(Box);
  const MotionImage = motion(Image);
  const { colorMode,toggleColorMode } = useColorMode();
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  const [isNotmediumScreen] = useMediaQuery("(min-width:1100px)");
  let isDark = colorMode === 'dark';

  return (
    <Flex 
    // ref={ref} initial={{x:-500}} animate={animationHeading}
      backgroundColor={isDark ? "#0b0c10" : "#5cdb95"} 
      width="100%" 
      padding="5" 
      
      direction={isNotSmallerScreen ? "row" : "column"}>
      <Box
        // ref={ref} initial={{x:-500}} animate={animationHeading}
        width={isNotSmallerScreen ? "40%" : "100%"}>
        <MotionHeading 
        color={isDark ? "#66fcf1" : "#05386B"} 
        ref={refHeading} 
        mt="10"
        initial={{opacity:0,x:-100}} 
        animate={animationHeading}
        fontSize={isNotSmallerScreen ? (isNotmediumScreen ? "4xl" : "2xl") :"lg"}
        ml={isNotSmallerScreen ? (isNotmediumScreen ? "16" : "10") : 0}
        alignSelf="flex-start"  >
          <span className='letter'>M</span>
          <span className='letter'>e</span>
          <span>,</span>
          <span> </span>
          <span className='letter'>M</span>
          <span className='letter'>y</span>
          <span className='letter'>s</span>
          <span className='letter'>e</span>
          <span className='letter'>l</span>
          <span className='letter'>f</span>
          <span> </span>
          <span className='letter'>&</span>
          <span> </span>
          <span className='letter'>I</span>
        </MotionHeading>
        <MotionText 
          initial={{opacity:0,y:100}} 
          animate={animationText} 
          ml={isNotSmallerScreen ? (isNotmediumScreen ? "16" : "10") : 0} 
          fontSize={isNotmediumScreen ? "lg" : "md"} 
          mt="6">
            I'm a Full-Stack Developer located in India (Bangalore, Karnataka). I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
            I'm currently purusing my Bachelor's Degree in Computer Science at Visvesvaraya Technological University (3rd year)
            Well-organised person, problem solver, independent employee with high attention to detail. Fan of F1, MMA, outdoor activities, movies.Interested in the entire webDev spectrum and working on ambitious projects with positive people.
        </MotionText>
      </Box>
      <Flex 
        justify="center" 
        width={isNotSmallerScreen ? "60%" : "100%"}>
          <MotionImage 
            initial={{opacity:0,y:500}} 
            animate={animationImg} src={Tech} />
      </Flex>
    </Flex>
  )
}
