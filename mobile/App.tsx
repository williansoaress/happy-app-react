import React from 'react';

import { useFonts } from 'expo-font';
import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';

import Routes from './src/routes';

import mapMarker from './src/images/map-marker.png';

//-29.7940559,-55.7911925,15z

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold, 
    Nunito_700Bold, 
    Nunito_800ExtraBold,
  });

  if(!fontsLoaded){
    return null;
  }

  return (
    <Routes />
  );
}

