import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {NativeBaseProvider, Text} from 'native-base'
import Routes from './src/Routes'
import {
  StatusBar,
  SafeAreaView
} from 'react-native';

export default function App() {
  return (
      <NavigationContainer>
      <StatusBar translucent={true}/>
      <NativeBaseProvider>
        <Routes/>
      </NativeBaseProvider>
    </NavigationContainer>
    
  );
}