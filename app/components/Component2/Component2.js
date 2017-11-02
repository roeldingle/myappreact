import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View
} from 'react-native';

import styles from '../../../styles';

export default class Component2 extends Component<{}> {

  onPress(){
    console.log(this.value);
  }
  
  render() {

    return (
      <View style={styles.flexcontainer}>
        <TouchableHighlight  
          style={styles.flex1} 
          onPress={this.onPress}
          underlayColor="orange"
          >
          <View>
            <Text style={styles.txtwhite}>Box 1</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity 
          style={styles.flex2}
          onPress={this.onPress}
          >
          <View>
            <Text style={styles.txtwhite}>Box 2</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.flex3}>
          <Text style={styles.txtwhite}>Box 3</Text>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('Component2', () => Component2);