import React, {Component} from 'react';
import {View, Text} from 'react-native';

import {Login} from './app/screens';
import {MainNavigator} from './app/components';

class App extends Component {
  render() {
    return (
      <Login />
    );
  };
};

export default App;
