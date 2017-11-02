import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

import styles from '../../../styles';

export default class Component1 extends Component<{}> {
  constructor(props){
    super(props);
    this.state ={
      name: 'Cool App',
      message: this.props.message,
      showName: true
    }
  }

  static defaultProps ={
    message: 'default props',
  }

  render() {

    let name = this.state.showName ? this.state.name : 'No Name';
    return (
      <View>
        <Text  style={styles.welcome}>
         {name}
        </Text>
        <Text style={{textAlign: 'center', marginBottom: 10}}>
         {this.state.message}
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Component1', () => Component1);