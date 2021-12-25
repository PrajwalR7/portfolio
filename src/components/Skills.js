import React from 'react'
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
  Button,
  Progress,
  Container} from '@chakra-ui/react';
import {useColorMode} from '@chakra-ui/color-mode';
import {useMediaQuery} from '@chakra-ui/media-query';

export default function Skills() {

  const { colorMode,toggleColorMode } = useColorMode();
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  let isDark = colorMode === 'dark';

  return (
    <Flex backgroundColor={isDark ? "#1d1d1d" : "#16e7c7b8"}  width="100%" direction={isNotSmallerScreen ? "row" : "column"}>
      <Box mt="20" width={isNotSmallerScreen ? "40%" : "100%"}>
      <Heading 
        ml={isNotSmallerScreen ? "20" : "2"}
        alignSelf="flex-start" color={isDark ? "#08fdd8" : "#1d1d1d"} fontFamily="font-file-82132">Skills and Experience</Heading>
      <Text ml={isNotSmallerScreen ? "16" : "4"} mt="6" fontSize="lg" mr="6">
      Since beginning my journey as a freelance developer nearly 10 years ago, I’ve done remote work for agencies, consulted for startups, and collaborated with talented people to create web products for both business and consumer use.

      I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, custom plugins, features, animations, and coding interactive layouts.

      I also have full-stack developer experience with popular open-source CMS like (WordPress, Drupal, Magento, Keystone.js and others) .

      Visit my LinkedIn profile for more details or just contact me.
      </Text>
      </Box>
      <Flex ml={isNotSmallerScreen ? "20" : 0} direction="column" alignItems={isNotSmallerScreen ? "flex-start" : "center"} justifyContent="center" mt="20" width={isNotSmallerScreen ? "60%" : "100%"}>
        <Text fontSize="lg" mb="5">React</Text>
        <Progress colorScheme="cyan" width="80%" value={50} size="sm" />
        <Text mt="10" fontSize="lg" mb="5">NodeJS</Text>
        <Progress colorScheme="whatsapp" width="80%" value={40} size="sm" />
        <Text mt="10" fontSize="lg" mb="5">Frontend</Text>
        <Progress colorScheme="red" width="80%" value={35} size="sm" />
        <Text mt="10" fontSize="lg" mb="5">Backend</Text>
        <Progress colorScheme="purple" width="80%" value={40} size="sm" />
      </Flex>
    </Flex>
  )
}
