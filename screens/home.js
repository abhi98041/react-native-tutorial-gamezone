import React from 'react';
import {  Text, View } from 'react-native';
import { globalstyles } from '../styles/global';
export default function Home() {
    return (
      <View style={globalstyles.container}>
        <Text style={globalstyles.titleText}>Home Screen</Text>
      </View>
    );
  }
  
