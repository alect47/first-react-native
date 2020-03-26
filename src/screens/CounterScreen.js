import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

const reducer = (state, action) => {
  // state === { counter: numner}
  // action === { type: 'increment' || 'decrement', payload: 1 }
  switch (action.type) {
    case 'increment':
      return { ...state, counter: state.counter +  action.payload};
    case 'decrement':
      return {...state, count: state.count - action.payload};
    default:
      return state;
  }

}

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0});
  const { counter } = state;

  return <View>
    <Button
      title="Increase"
      onPress={() => {
    }}/>
    <Button
      title="Decrease"
      onPress={() => {
    }}/>
    <Text>Current Count: {}</Text>
  </View>
};

const styles = StyleSheet.create({});

export default CounterScreen;
