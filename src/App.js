import * as React from 'react';
import {} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CV from './assets/components/CV';
import Flashlight from './assets/components/Flashlight';
import NumberGenerator from './assets/components/NumberGenerator';


/**
 * Production of stacked pages
 */

const CVStack = createNativeStackNavigator();

function CVStackScreen() {
  return (
    <CVStack.Navigator>
      <CVStack.Screen name="Curriculum" component={CV} />
    </CVStack.Navigator>
  );
}

const FlashlightStack = createNativeStackNavigator();

function FlashlightStackScreen() {
  return (
    <FlashlightStack.Navigator>
      <FlashlightStack.Screen name="Flashlight" component={Flashlight} />
    </FlashlightStack.Navigator>
  );
}

const NumberGeneratorStack = createNativeStackNavigator();

function NumberGeneratorStackScreen() {
  return (
    <NumberGeneratorStack.Navigator>
      <NumberGeneratorStack.Screen name="NumberGenerator" component={NumberGenerator} />
    </NumberGeneratorStack.Navigator>
  );
}

// Bottom Tab creation
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Curriculum" component={CVStackScreen} />
        <Tab.Screen name="Flashlight" component={FlashlightStackScreen} />
        <Tab.Screen name="Number Generator" component={NumberGeneratorStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
