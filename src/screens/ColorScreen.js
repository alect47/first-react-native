import React, { useState } from 'react';
import { View, StyleSheet, Button} from 'react-native';

const ColorScreen = () => {
  const [counter, setCounter] = useState(0);

  return <View>
    <Button title="Add a Color" />
  </View>
};

const styles = StyleSheet.create({});

export default ColorScreen;
