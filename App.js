import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from "./src/screens/LoginScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from './src/screens/RegisterScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
      <NavigationContainer>
         <Stack.Navigator initialRouteName='LoginScreen'>
            <Stack.Screen name='LoginScreen' component={LoginScreen} options={{headerShown: false}} />
            <Stack.Screen name='RegisterScreen' component={RegisterScreen} options={{headerShown: false}} />
         </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1c24',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
