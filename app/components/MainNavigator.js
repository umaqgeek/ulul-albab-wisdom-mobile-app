import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
  Login,
  ListUsers,
  ResultUser,
  Instruction,
  Questions,
  Result,
} from '../screens';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

class MainNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Instruction">
          <Stack.Screen name="Instruction" component={Instruction} options={{title: 'Instruction'}} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
};

export default MainNavigator;
