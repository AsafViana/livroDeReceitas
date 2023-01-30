import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Lista from '../View/Pages/ListaDeReceitas'
import NovaReceita from '../View/Pages/NovaReceita'

const Stack = createNativeStackNavigator()

export default  function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='Lista' options={{headerShown: false}} component={Lista}/>
            <Stack.Screen name='NovaReceita' options={{headerShown: false}} component={NovaReceita}/>
        </Stack.Navigator>
    )
}