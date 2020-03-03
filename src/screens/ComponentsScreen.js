import React from 'react';
import { Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
  const stuff = 'MEEEEE';
  return (
    <View>
      <Text style={styles.textStyle}>THis is the components screen</Text>
      <Text style={styles.otherText}>THis is the components screen</Text>
      <Text style={styles.otherText}>{stuff}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  },
  otherText: {
    fontSize: 50
  }
});

export default ComponentsScreen
