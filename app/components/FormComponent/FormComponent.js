import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  Switch,
  View
} from 'react-native';

import styles from '../../../styles';

export default class FormComponent extends Component<{}> {

  constructor(){
    super();
    this.state = {
      textValue: 'Hello',
      switchValue: false,
    }
  }

  onChangeTextMethod(value){
    this.setState({
      textValue : value
    });
  }

  onChangeSwitchMethod(value){
    this.setState({
      switchValue : value
    });
  }

  onSubmitTextMethod(value){
    this.setState({
      textValue : value
    });
    alert(this.state.textValue);
  }

  

  render() {

    return (
      <View>
        <Switch 
          value={this.state.switchValue}
          onValueChange={(value) => this.onChangeSwitchMethod(value)}
        />
        <TextInput style={styles.txtbox} 
          placeholder="Enter text here"
          value={this.state.textValue}
           onChangeText={(value) => this.onChangeTextMethod(value)}
          onSubmitEditing={(value) => this.onSubmitTextMethod(this.state.textValue)}
        />
        <Text style={styles.welcome}>{this.state.textValue}</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('FormComponent', () => FormComponent);