import React from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';
import { 
  useFonts, 
  Montserrat_400Regular, 
  Montserrat_700Bold 
} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

      
import Cesta from './src/telas/Cesta';
import mocks from "./src/mocks/cesta";

export default function App() {
  const [fontCarregada] = useFonts({
    "MontSerrratRegular": Montserrat_400Regular,
    "MontSerratBold": Montserrat_700Bold,
  });
  
  if(!fontCarregada) {
    return < AppLoading/>
  }

  return (
    <SafeAreaView>

      <StatusBar />
      <Cesta {...mocks} />
    </SafeAreaView>
  );
}
