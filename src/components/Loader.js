import React from 'react'
import { 
  Flex,
  IconButton, 
  Spacer,
  VStack,
  Text, 
  Box,
  Button,
  HStack} from '@chakra-ui/react';
import {motion} from 'framer-motion';
import {useMediaQuery} from '@chakra-ui/media-query';

export default function Loader() {


  return (
    <div className="outer-main">
      <div className='main-bg'>
        <div className='text-bg'>Welcome</div>
        {/* <div className='content-bg'> */}
          <div className='title-bg'>To my portfolio</div>
          <div className='bar-bg'></div>
        {/* </div> */}
      </div>
      {/* <HStack 
      backgroundColor="black"
      w="100%"
      h="100vh"
      display='flex' direction="row" justify="center" alignItems="center">
        <Text
        className="Prajwal"
        // initial={{x:100,opacity:0}}
        // animate={{x:0,opacity:1}}
        // transition={{duration:2,delay:0.5}}
        fontWeight="hairline" p={isNotSmallerScreen ? "5" : "2"} fontFamily="'Exo', sans-serif" fontSize={isNotSmallerScreen ? "5xl" : "2xl"}>Prajwal</Text>
        <div className='middle-carat'></div>
        <Text
        className='Ramesh'
        fontWeight="extrabold" color="teal"p={isNotSmallerScreen ? "5" : "2"} fontFamily="'Exo', sans-serif" fontSize={isNotSmallerScreen ? "5xl" : "2xl"}>Ramesh</Text>
      </HStack> */}
    </div>
  )
}
