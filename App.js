import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer style={styles.container}>
        <Stack.Navigator intialRouteName='Splash' >
          <Stack.Screen name="splash" component={SplashScreen}  options={{ headerShown: false }}/>
          <Stack.Screen name="SignIn" component={SigninScreen}  options={{ headerShown: false }}/>
          <Stack.Screen name="SignUp" component={SignupScreen}  options={{ headerShown: false }}/>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{
    flex : 1,
  }
});
export default App;