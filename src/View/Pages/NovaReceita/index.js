import React from 'react'
import { Box, FormControl, Text, Input, StatusBar, TextArea, Button } from 'native-base'
import { ScrollView } from 'react-native'

export default function NovaReceita() {
	return (
		<Box flex={1} bg={'orange.500'} style={{ paddingTop: Platform.OS === 'android' ? 30 : 0 }}>
			<StatusBar backgroundColor="#f97316" />
			<Box flex={1} bg={'white'} margin={'5'} rounded={'3xl'}>
				<ScrollView>
					<FormControl marginTop={'10'} marginX={4}>
						<FormControl.Label>Nome do prato </FormControl.Label>
						<Input w={'72'} />
					</FormControl>
					<FormControl marginTop={'10'} marginX={4}>
						<FormControl.Label>Categoria</FormControl.Label>
						<Input w={'72'} />
					</FormControl>
					<FormControl marginTop={'10'} marginX={4}>
						<FormControl.Label>Ingredientes</FormControl.Label>
						<TextArea h={20} placeholder="Escreva aqui os ingredientes" w="100%" maxW="300" />
					</FormControl>
					<FormControl marginTop={'10'} marginX={4}>
						<FormControl.Label>Modo de preparo</FormControl.Label>
						<TextArea h={20} placeholder="Escreva aqui o modo de preparo" w="100%" maxW="300" />
					</FormControl>
					<Button m={'10'} rounded={'3xl'} bg={'orange.500'}>
						<Text fontSize={'2xl'} bold color={'amber.100'}>
                            Salvar
                        </Text>
					</Button>
				</ScrollView>
			</Box>
		</Box>
	)
}
