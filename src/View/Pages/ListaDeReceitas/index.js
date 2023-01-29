import React from 'react'
import { Center, Text, Box, IconButton } from 'native-base'
import Card from '../../Components/Card'
import { Entypo } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'

export default function ListaDeReceitas() {
	const navigation = useNavigation()
	const DATA = [
		{
			categoria: 'Refeição completa',
			titulo: 'Strogonoff',
			imagem: 'https://imgs.search.brave.com/YgwTn3n1UmZzV3aCzEG-RHeGA3c-B94K0s150bup3iU/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC54/d1FiZUdGMUltWDds/ZnFMT1l2WHJBSGFF/OCZwaWQ9QXBp',
		},
		{
			categoria: 'Refeição completa',
			titulo: 'Lasanha',
			imagem: 'https://imgs.search.brave.com/e3xHfD3M80pwYW6gcWViqu_ExnktqNeQSqCGQWqQJyo/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5y/dTNXejBTMlVlZzZT/djZCS1BSNm5RSGFF/NyZwaWQ9QXBp',
		},
		{
			categoria: 'Sobremesa',
			titulo: 'Brigadeiro',
			imagem: 'https://imgs.search.brave.com/EHIGdbJI08PKl-RvBEGqTZoTXU0VJB-AUXHQysnhQCI/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC44/RmN5SWlxRTdZVUxL/OExYRWJvVnJnSGFI/YSZwaWQ9QXBp',
		},
	]
	return (
		<Box flex={1} style={{ paddingTop: Platform.OS === 'android' ? 30 : 0 }}>
			<StatusBar backgroundColor="#f97316" />
			<Center bgColor={'orange.500'} h={'16'} roundedBottom={'3xl'}>
				<Text fontSize={'3xl'} bold color={'orange.50'}>
					Receitas
				</Text>
			</Center>
			<Center flex={1}>
				{DATA.map((item) => (
					<Card categoria={item.categoria} titulo={item.titulo} imagem={item.imagem} />
				))}
			</Center>
			<IconButton
				m={'2'}
				mb={'2'}
				h={'16'}
				rounded={'3xl'}
				bgColor={'orange.500'}
				variant={'solid'}
				_icon={{
					as: Entypo,
					name: 'plus',
					size: 30,
				}}
				onPress={() => navigation.navigate('NovaReceita')}
			/>
		</Box>
	)
}
