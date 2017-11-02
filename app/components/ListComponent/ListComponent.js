import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  ListView,
  View
} from 'react-native';

import styles from '../../../styles';

const users = [
  {name: 'Roy Vincent Niepes'},
  {name: 'Lloyd Chua'},
  {name: 'Fritz Roca'},
  {name: 'Koo Vergara'}
]

export default class ListComponent extends Component<{}> {

  constructor(){
    super();
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      userDataSource: ds.cloneWithRows(users),
    }
  }

  renderRow(user, sectionId, rowId, highlightRow){

    return(
      <View style={styles.row}>
        <Text style={styles.rowText}>{user.name}</Text>
      </View>
    );
    
  }

  

  render() {

    return (
      <ListView 
      dataSource={this.state.userDataSource} 
      renderRow={this.renderRow.bind(this)}
      />
    );
  }
}

AppRegistry.registerComponent('ListComponent', () => ListComponent);