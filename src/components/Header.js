import React from 'react'
import {useColorMode} from '@chakra-ui/color-mode';
import {useMediaQuery} from '@chakra-ui/media-query';
import {Stack,Circle,Flex,Box,Text} from '@chakra-ui/layout'
import {Image} from '@chakra-ui/react'
import MeImage from '../resources/me.jpg'

export default function Header() {

  const {colorMode} = useColorMode()
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  const isDark = colorMode === 'dark';
  console.log(isDark);

  return (
    <div>Hi</div>
    // <div>
    //   <Stack>
    //     <Circle 
    //     position="absolute" 
    //     bg={isDark ? "blue.100" : "green.100"} 
    //     opacity="0.05" 
    //     w="300px" 
    //     height="300px" 
    //     alignSelf="flex-end" />
    //     <Flex
    //     direction={isNotSmallerScreen ? "row" : "column"}
    //     spacing="200px"
    //     padding={isNotSmallerScreen ? "32" : "0"}>
    //       <Box mt={isNotSmallerScreen ? "0" : 16} alignSelf="flex-start">
    //         <Text fontSize="5xl" fontWeight="semibold" alignSelf="flex-start">Hi, I am</Text>
    //         <Text 
    //         alignSelf="flex-start"
    //         fontSize="7xl" 
    //         fontWeight="bold" 
    //         bgGradient="linear(to-r,cyan.400,blue.400,purple.400)" 
    //         bgClip="text">Prajwal</Text>
    //         <Text color={isDark ? "gray.200" : "gray:500"}>
    //           Currently pursuing B.E in Visvesvaray Technological University jhdskjdhasjhdbnck klhhsdlaksjdljhvnjfhkjb
    //         </Text>
    //       </Box>
    //       <Image src={MeImage}
    //       alignSelf="center"
    //       backgroundColor="transparent"
    //       mt={isNotSmallerScreen ? "0" : "12"}
    //       mb={isNotSmallerScreen ? "0" : "12"}
    //       borderRadius="full"
    //       boxSize="300px"></Image>
    //     </Flex>
    //   </Stack>
    // </div>
  )
}
