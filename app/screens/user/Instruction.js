import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class Instruction extends Component {
  _onEnter = () => {
    this.props.navigation.navigate('Login');
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>The Ulul Albab Wisdom Innovative Thinking Tools</Text>
        <Text style={styles.title}>(The Wisdom Apps)</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={this._onEnter}>
          <Text style={styles.buttonText}>Enter</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
