
import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import Header from './components/Header';
import AlbumsList from './components/AlbumList';

export default class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header/>
        <AlbumsList/>
      </View>
    );
  }
}

AppRegistry.registerComponent('AlbumsApp', () => Home);