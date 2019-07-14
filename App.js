/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import OneSignal from 'react-native-onesignal';

export default class App extends Component {

  
constructor(props) {
  super(props);
  OneSignal.init("ac478bed-13c6-422d-8f94-2ee731eb5d7a");
  OneSignal.inFocusDisplaying(2)
  OneSignal.addEventListener('received', this.onReceived);
  OneSignal.addEventListener('opened', this.onOpened);
  OneSignal.addEventListener('ids', this.onIds);
  OneSignal.configure(); 	// triggers the ids event
}

componentWillUnmount() {
  OneSignal.removeEventListener('received', this.onReceived);
  OneSignal.removeEventListener('opened', this.onOpened);
  OneSignal.removeEventListener('ids', this.onIds);
}

onReceived(notification) {
  alert("Notification received: ", notification);
}

onOpened(openResult) {
  alert('Message: ', openResult.notification.payload.body);
  alert('Data: ', openResult.notification.payload.additionalData);
  alert('isActive: ', openResult.notification.isAppInFocus);
  alert('openResult: ', openResult);
}

onIds(device) {
  alert('Device info: ', device);
}
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>One Signal React Native</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
