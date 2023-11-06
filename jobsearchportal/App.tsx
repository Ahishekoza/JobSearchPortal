/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/pages/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import Header from './src/components/Header';
import JobDetails from './src/pages/JobDetails';
import SearchScreen from './src/pages/SearchScreen';

const Stack = createNativeStackNavigator()
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' >
        <Stack.Screen name='Home' component={HomeScreen}
          options={{
            header: () => <Header />,
          }} />
          <Stack.Screen  name='JobDetails' component={JobDetails}/>
          <Stack.Screen name='Search' component={SearchScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default App;
