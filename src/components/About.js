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
import React from 'react';
import {useColorMode} from '@chakra-ui/color-mode';
import {useMediaQuery} from '@chakra-ui/media-query';
import { useToast } from '@chakra-ui/react';
import Tech from '../resources/Tech.svg';

export default function About() {

  const { colorMode,toggleColorMode } = useColorMode();
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  let isDark = colorMode === 'dark';

  return (
    <Flex backgroundColor={isDark ? "#252525" : "#56edd6"} width="100%" padding="12" direction={isNotSmallerScreen ? "row" : "column"}>
      <Box width={isNotSmallerScreen ? "40%" : "100%"}>
        <Heading 
        ml={isNotSmallerScreen ? "16" : 0}
        alignSelf="flex-start" color={isDark ? "#08fdd8" : "#1d1d1d"} fontFamily="font-file-82132">Me, Myself & I</Heading>
        <Text ml={isNotSmallerScreen ? "16" : 0} fontSize="lg" mt="6">
          I'm a Full-Stack Developer located in India (Bangalore, Karnataka). I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
          I'm currently purusing my Bachelor's Degree in Computer Science at Visvesvaraya Technological University (3rd year)
          Well-organised person, problem solver, independent employee with high attention to detail. Fan of F1, MMA, outdoor activities, movies.Interested in the entire webDev spectrum and working on ambitious projects with positive people.
        </Text>
      </Box>
      <Flex justify="center" width={isNotSmallerScreen ? "60%" : "100%"}>
        <Image src={Tech} />
      </Flex>
    </Flex>
  )
}
