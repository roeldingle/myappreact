/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import styles from './styles';
import Component1 from './app/components/Component1/Component1';
import Component2 from './app/components/Component2/Component2';
import FormComponent from './app/components/FormComponent/FormComponent';
import ListComponent from './app/components/ListComponent/ListComponent';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      <View>
        <Component1/>
        <FormComponent/>
        <Component2/>
        <ListComponent />
      </View>
    );
  }
}

