import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 2,
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  flexcontainer: {
  	flexDirection: 'row',
  	height: 40
  },
  flex1: {
  	flex: 1,
  	backgroundColor: 'red',
  	padding: 10
  },
  flex2: {
  	flex: 1,
  	backgroundColor: 'blue',
  	padding: 10
  },
  flex3: {
  	flex: 1,
  	backgroundColor: 'green',
  	padding: 10
  },
  txtwhite: {
  	color: '#ffffff',
  	textAlign: 'center',
  },
  txtbox: {
  	
  },
  row:{
  	flexDirection: 'row',
  	justifyContent: 'center',
  	padding: 12,
  
  	borderBottomColor: '#cacaca',
  	borderBottomWidth: 1,

  },
  rowText:{
  	flex: 1
  }
});