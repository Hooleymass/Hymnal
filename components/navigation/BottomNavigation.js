import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import * as Screens from '../../screens';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Number"
        component={Screens.NumberScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                <Icon name="search" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('History')}>
                <Icon name="history" />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => <Text style={{ marginLeft: 10 }}>Adventist Hymnal</Text>,
          headerTitle: '',
          tabBarIcon: ({ size, color }) => <Icon name="import-contacts" size={size} color={color} />,
        })}
      />
      <Tab.Screen
        name="Index"
        component={Screens.IndexScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => console.log('Number Arrangement')}>
                <Icon name="sort-by-alpha" size={40} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log('A-Z Arrangement')}>
                <Icon name="sort" size={40} />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => <Text style={{ marginLeft: 10 }}>Adventist Hymnal</Text>,
          headerTitle: '',
          tabBarIcon: ({ size, color }) => <Icon name="list" size={size} color={color} />,
        })}
      />
      <Tab.Screen
        name="Favorites"
        component={Screens.FavoriteScreen}
        options={{
          headerLeft: () => <Text style={{ marginLeft: 10 }}>Adventist Hymnal</Text>,
          headerTitle: '',
          tabBarIcon: ({ size, color }) => <Icon name="favorite" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Screens.SettingsScreen}
        options={{
          headerLeft: () => <Text style={{ marginLeft: 10 }}>Adventist Hymnal</Text>,
          headerTitle: '',
          tabBarIcon: ({ size, color }) => <Icon name="settings" size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNavigation;

