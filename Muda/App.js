import React, { Component } from 'react';
import { Text, AppRegistry, Image } from 'react-native';
import Header from './src/Components/header';

export default class App extends Component {
  render() {
    return (
      <Header />
    );
  }
}



AppRegistry.registerComponent('Muda', () => App)
