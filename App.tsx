import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import HeaderScrollAnimated from './src/demo/HeaderScrollAnimated';
// import AnimatedTab from './src/demo/AnimatedTab';
// import { useConfetti } from './src/demo/PhaoHoa';
// import StopWatch from './src/StopWatch';

const App = () => {
  return (
    <SafeAreaProvider>
      <HeaderScrollAnimated />
    </SafeAreaProvider>
  );
};

export default gestureHandlerRootHOC(App);
