import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class Login extends Component {
  _onEnter = () => {
    alert('hahahaha');
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

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 50
  },
  title: {
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center'
  },
  button: {
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginTop: 30,
    width: 200,
    backgroundColor: 'rgba(0, 0, 255, 0.1)',
    borderColor: 'rgba(0, 0, 255, 0.5)'
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center'
  }
});
