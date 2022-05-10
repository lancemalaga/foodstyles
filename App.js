import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Fragment } from 'react/cjs/react.production.min';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

// SCREENS
import HomeScreen from './src/screens/HomeScreen';

const Stack = createStackNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerMode: 'none',
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Fragment>
      <AppContainer/>
    </Fragment>
  );
};

export default App;
