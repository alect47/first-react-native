import React from 'react';
import { Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
  const stuff = 'MEEEEE';
  return (
    <View>
      <Text style={styles.textStyle}>THIS is the components screen</Text>
      <Text style={styles.otherText}>THis is also the components screen</Text>
      <Text style={styles.otherText}>{stuff}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 50
  },
  otherText: {
    fontSize: 30
  }
});

export default ComponentsScreen
