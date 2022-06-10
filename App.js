import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Home from './src/pages/home/Home';

function App() {
  return (
    <SafeAreaProvider>
      <Home />
    </SafeAreaProvider>
  );
}

export default App;
