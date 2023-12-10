import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigation from './BottomNavigation';
import * as Screens from '../../screens';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomNavigation"
          component={BottomNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          component={Screens.SearchScreen}
        />
        <Stack.Screen
          name="History"
          component={Screens.HistoryScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;

