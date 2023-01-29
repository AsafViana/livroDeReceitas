import React from 'react'
import { Box, Text, Image, Center, HStack, VStack, Pressable } from 'native-base'

export default function Card({categoria, titulo, imagem}) {
	return (
        <Pressable margin={'3'} onPress={() => alert('Apertou!!!')}>
            <HStack bgColor={'orange.500'} w={'4/5'} h={'32'} rounded={'3xl'} shadow={'9'}>
			<Box bg={'orange.50'} h={'32'} w={'40'} justifyContent={'center'} roundedLeft={'3xl'}>
				<Image
					source={{
						uri: imagem,
					}}
					alt="Alternate Text"
					size="full"
					roundedLeft={'3xl'}
				/>
			</Box>

			<VStack margin={'2'} flex={1}>
				<Center alignContent={'center'}>
                    <Text marginTop={'2'} fontSize={'xs'} color={'coolGray.300'} >
                        {categoria}
                    </Text>
                    <Text marginTop={'2'} fontSize={'xl'} bold color={'orange.50'}>
                        {titulo}
                    </Text>
                </Center>
			</VStack>
		</HStack>
        </Pressable>
	)
}
