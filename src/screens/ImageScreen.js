import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return <View>
    <ImageDetail imageName="Forest"/>
    <ImageDetail imageName="Beach"/>
    <ImageDetail imageName="Forest"/>
  </View>
};

const styles = StyleSheet.create({});

export default ImageScreen;
