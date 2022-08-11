// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from "./Screens/Main"
import CreateNote from "./Screens/CreateNote"


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Notes">
        <Stack.Screen name="Notes" component={Main} />
        <Stack.Screen name="Create Note" component={CreateNote} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;