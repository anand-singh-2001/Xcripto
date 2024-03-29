import React from 'react'
import {  VStack,Image, Heading,Text } from '@chakra-ui/react'


const ExchangeCard = ({name,img,rank,url}) => {
  return (
    <a href={url} target={'blank'}>
    
    <VStack w={52} shadow={'lg'} p={8} borderRadius={'lg'} transition={'all 0.3s'} m={4} __css={{
        '&:hover':{
            transform:'scale(1.1)'
        },
    }}>
      <Image src={img} w={10} h={10} objectFit={'contain'} alt={'Exchange'}/>
      
      <Heading size={'md'} noOfLines={1}> {/**Keeps the no of lines to 1 extra words are represented with ...dots */}
         {rank}
         </Heading> 

         <Text noOfLines={1}>{name}</Text>
    </VStack>

  </a>
  )
}

export default ExchangeCard
