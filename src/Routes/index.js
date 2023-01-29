import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Lista from '../View/Pages/ListaDeReceitas'

const Stack = createNativeStackNavigator()

export default  function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='Lista' options={{headerShown: false}} component={Lista}/>
        </Stack.Navigator>
    )
}