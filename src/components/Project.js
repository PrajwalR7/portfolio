import { 
  Flex,
  Heading,
  VStack,
  Text, 
  Box,
  Wrap,
  WrapItem,
  Badge,} from '@chakra-ui/react'
import React from 'react';
import {useColorMode} from '@chakra-ui/color-mode';
import {useMediaQuery} from '@chakra-ui/media-query';
import { useToast } from '@chakra-ui/react';
import "../App.css"


export default function Profile() {

  const toast = useToast();
  const { colorMode,toggleColorMode } = useColorMode();
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  let isDark = colorMode === 'dark';

  return (
    <Flex 
      alignItems="center" 
      justifyContent="center" 
      backgroundColor={isDark ? "#1d1d1d" : "#16e7c7b8"} 
      width="100%" 
      spacing="200px" 
      direction={isNotSmallerScreen ? "column" : "column"}>
        <Heading 
          fontSize={isNotSmallerScreen ? "3xl" : "lg"} 
          mt="14"  
          color={isDark ? "#08fdd8" : "#1d1d1d"} 
          alignSelf="center" 
          mb={12}>
            <span className="letter">P</span>
            <span className="letter">R</span>
            <span className="letter">O</span>
            <span className="letter">J</span>
            <span className="letter">E</span>
            <span className="letter">C</span>
            <span className="letter">T</span>
            <span className="letter">S</span>
        </Heading>
      <Wrap 
        mb="16" 
        justify="center" 
        alignItems="center" 
        spacing="40px" 
        shouldWrapChildren="false">
          <WrapItem 
            onClick={() => window.location.href="https://www.npmjs.com/package/cli-reddit"} 
            alignSelf="center">
              <Box
                backgroundColor={isDark ? "white" : "gray.200"}
                borderWidth="1px" 
                borderRadius="lg"
                width="350px"
                _hover={{
                  backgroundColor:"white",
                  cursor:"pointer",
                  transform:'scale(1.1)',
                  color:'#1a202c'
                }} 
                transition="all 300ms linear">
                  <VStack 
                    padding="6">
                    <Text 
                       
                      color="red.500" 
                      fontSize="2xl">CLI Reddit</Text>
                    <Box p="6">
                      <Box display="flex">
                        <Text 
                          fontSize="lg" 
                          color="#10141c" 
                          mr="5">Tech Used</Text>
                        <Badge 
                          color="black" 
                          borderRadius="full" 
                          backgroundColor="#e5ce4f" 
                          px="3">JS</Badge>
                      </Box>
                    </Box>
                    <Box 
                      borderRadius="lg" 
                      p="6" 
                      backgroundColor="#d6d6d6">
                        <Text 
                          textAlign="center" 
                          fontSize="lg" 
                          color="#10141c">
                          Command line interface for reddit (npm package)
                        </Text>
                    </Box>
                  </VStack>
              </Box>
          </WrapItem>
          <WrapItem 
            onClick={() => window.location.href="https://github.com/PrajwalR7/Soap_search"}>
              <Box
                backgroundColor={isDark ? "white" : "gray.200"}
                borderWidth="1px" 
                borderRadius="lg"
                width="350px"
                _hover={{
                  backgroundColor:"white",
                  cursor:"pointer",
                  transform:'scale(1.1)',
                  color:'#1a202c'
                }} 
                transition="all 300ms linear">
                  <VStack padding="6">
                    <Text 
                       
                      color="teal" 
                      fontSize="2xl">Soap Search</Text>
                    <Box p="6">
                      <Box display="flex">
                        <Text 
                          fontSize="lg" 
                          color="#10141c" 
                          mr="5">Tech Used</Text>
                        <Badge 
                          color="black" 
                          borderRadius="full" 
                          backgroundColor="#e5ce4f" 
                          px="2" mr="2">JS</Badge>
                        <Badge 
                          color="white" 
                          borderRadius="full" 
                          backgroundColor="#e34c26" 
                          px="2" 
                          mr='2'>HTML</Badge>
                        <Badge 
                          color="white" 
                          borderRadius="full"
                          backgroundColor="#563d7c" 
                          px="2" 
                          mr="2">CSS</Badge>
                      </Box>
                    </Box>
                    <Box 
                      borderRadius="lg" 
                      p="6" 
                      backgroundColor="#d6d6d6">
                        <Text 
                          textAlign="center" 
                          fontSize="lg" 
                          color="#10141c">
                            Basic search engine for movie webiste SoapSearch
                        </Text>
                    </Box>
                  </VStack>
              </Box>
          </WrapItem>
          <WrapItem onClick={() => window.location.href="https://github.com/PrajwalR7/Audio-Text"}>
            <Box
                backgroundColor={isDark ? "white" : "gray.200"}
                borderWidth="1px" 
                borderRadius="lg"
                width="350px"
                _hover={{
                  backgroundColor:"white",
                  cursor:"pointer",
                  transform:'scale(1.1)',
                  color:'#1a202c'
                }} 
                transition="all 300ms linear">
                  <VStack padding="6">
                    <Text 
                       
                      color="purple" 
                      fontSize="2xl">Audio - Text</Text>
                    <Box p="6">
                      <Box display="flex">
                        <Text 
                          fontSize="lg" 
                          color="#10141c" 
                          mr="5">Tech Used</Text>
                        <Badge 
                          color="black" 
                          borderRadius="full" 
                          backgroundColor="#e5ce4f" 
                          px="2" 
                          mr="2">JS</Badge>
                        <Badge 
                          color="white" 
                          borderRadius="full"
                          backgroundColor="#e34c26" 
                          px="2" 
                          mr='2'>HTML</Badge> 
                        <Badge 
                          color="white" 
                          borderRadius="full" 
                          backgroundColor="#563d7c" 
                          px="2" 
                          mr="2">CSS</Badge>
                      </Box>
                    </Box>
                      <Box 
                      borderRadius="lg" 
                      p="6" 
                      backgroundColor="#d6d6d6">
                        <Text 
                          textAlign="center" 
                          fontSize="lg" 
                          color="#10141c">
                            Audio to text converter using DeepGram API
                        </Text>
                    </Box>
                  </VStack>
              </Box>
          </WrapItem>
          <WrapItem alignSelf="center">
            <Box
              onClick={() => null}
              backgroundColor={isDark ? "white" : "gray.200"}
              borderWidth="1px" 
              borderRadius="lg"
              width="350px"
              _hover={{
                backgroundColor:"white",
                cursor:"not-allowed",
                transform:'scale(1.1)',
                color:'#1a202c'
              }} 
              transition="all 300ms linear">
                <VStack padding="6">
                  <Text 
                     
                    color="darkgoldenrod" 
                    fontSize="2xl">ChatApp</Text>
                  <Box p="6">
                    <Box display="flex">
                      <Text 
                        fontSize="lg" 
                        color="#10141c" 
                        mr="5">Tech Used</Text>
                      <Badge 
                        color="black" 
                        borderRadius="full" 
                        backgroundColor="#e5ce4f" 
                        px="2" 
                        mr="2">JS</Badge>
                      <Badge 
                        color="white" 
                        borderRadius="full" 
                        backgroundColor="#e34c26" 
                        px="2" 
                        mr='2'>HTML</Badge> 
                      <Badge 
                        color="white" 
                        borderRadius="full" 
                        backgroundColor="#563d7c" 
                        px="2" 
                        mr="2">CSS</Badge>
                    </Box>
                  </Box>
                  <Box 
                  borderRadius="lg" 
                  p="6" 
                  backgroundColor="#d6d6d6">
                    <Text 
                      textAlign="center" 
                      fontSize="lg" 
                      color="#10141c">
                        Chat Application using webSockets. Still working on it :)
                    </Text>
                  </Box>
                </VStack>
            </Box>
          </WrapItem>
      </Wrap>
    </Flex>
  )
}
