import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

const ImageDetail = ({ imageSource, imageName, score}) => {
  return <View>
    <Image source={imageSource} />
    <Text>{imageName} {score}</Text>
  </View>
};

const styles = StyleSheet.create({});

export default ImageDetail;
