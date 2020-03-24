import React, { useState} from 'react';
import { View, Text, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const SquareScreen = () => {

  return <View>
    <ColorCounter
      onIncrease={() => }
      onDecrease={() => }
      color="Red"
      />
    <ColorCounter
      onIncrease={() => }
      onDecrease={() => }
      color="Blue"
    />
    <ColorCounter
      onIncrease={() => }
      onDecrease={() => }
      color="Green"
    />
    <View style={{
      height: 150,
      width:150,
      backgroundColor: `rgb(${red}, ${green}, ${blue})`
      }}
    />
  </View>
};

const style = StyleSheet.create({});

export default SquareScreen;
