import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

// State in React is used to track any variable that is expected to change over time
// We never want parent element(TextScreen) to inspect element/property of child(TextInput)

const TextScreen = () => {
  const [name, setName] = useState('');

  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newText) => setName(newText) }
      />
      <Text>My name is {name}</Text>
      {name.length < 6 ? <Text>Password must be longer than 5 characters</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default TextScreen;
