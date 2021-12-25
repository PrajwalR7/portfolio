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
  const [refHeading,inViewHeading] = useInView({triggerOnce:true,threshold:0.45});
  // const [refText,inViewText] = useInView({triggerOnce:true,threshold:0.25});
  const animationHeading = useAnimation();
  const animationText = useAnimation();
  const animationImg = useAnimation();

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
      animationImg.start({
        opacity:1,
        x:0,
        transition:{
          duration:1,
          delay:0.25
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
  let isDark = colorMode === 'dark';

  return (
    <Flex 
    // ref={ref} initial={{x:-500}} animate={animationHeading}
      backgroundColor={isDark ? "#252525" : "#56edd6"} 
      width="100%" 
      padding="12" 
      direction={isNotSmallerScreen ? "row" : "column"}>
      <Box
        // ref={ref} initial={{x:-500}} animate={animationHeading}
        width={isNotSmallerScreen ? "40%" : "100%"}>
        <MotionHeading 
        ref={refHeading} 
        initial={{opacity:0,x:0}} 
        animate={animationHeading}
        fontSize={isNotSmallerScreen ? "4xl" :"lg"}
        ml={isNotSmallerScreen ? "16" : 0}
        alignSelf="flex-start" 
        color={isDark ? "#08fdd8" : "#1d1d1d"} 
        fontFamily="font-file-82132">
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
          ml={isNotSmallerScreen ? "16" : 0} 
          fontSize="lg" 
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
            initial={{opacity:0,x:1500}} 
            animate={animationImg} src={Tech} />
      </Flex>
    </Flex>
  )
}
