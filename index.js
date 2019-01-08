// Import libray
import React from 'react';
import ReactNative, { SafeAreaView } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </SafeAreaView>
);

// Render it to device
ReactNative.AppRegistry.registerComponent('albums', () => App);
