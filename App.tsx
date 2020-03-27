import React from 'react';
import { Text, View } from 'react-native';

// import Routes from './src/routes';

import Incidents from './src/pages/Incidents';
import Detail from './src/pages/Detail';

export default function App() {
  return (
    <View>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Incidents/>
      <Detail/>
    </View>
  );
}