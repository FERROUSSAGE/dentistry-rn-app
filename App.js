import React from 'react';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home as HomeScreen, Appointment as AppointmentScreen } from './screens/index';

const Stack = createStackNavigator(),
  whiteTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white'
    },
  };

function App() {
  return (
    <NavigationContainer theme={whiteTheme}>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            title: 'Список приемов',
            headerTintColor: '#2A86FF',
            headerTitleStyle: {
              fontSize: 24
            }
          }}/>
        <Stack.Screen
          name="Appointment"
          component={AppointmentScreen} 
          options={{ 
            title: 'Карта пациента',
            headerTintColor: '#2A86FF',
            headerTitleStyle: {
              fontSize: 24
            }
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

