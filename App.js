import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import InputGoal from './components/InputGoal/InputGoal';
import ListGoal from './components/ListGoal/ListGoal';

export default function App() {
  const [list, setList] = useState([])
  const [inputValue, setInputValue] = useState('')

  const onButtonClick = () => {
    if (inputValue !== '') {
      setList((oldList) => [...oldList, { text: inputValue, id: Math.random().toString() + inputValue }])
    }
  }

  const onInputChange = (newValue) => {
    setInputValue(newValue)
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <InputGoal onClick={onButtonClick} onChange={onInputChange} value={inputValue} />
      </View>
      <View style={styles.listContainer}>
        <ListGoal data={list} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 4,
    paddingTop: 20,
  },
  inputContainer: {
    flex: 1,    
  },
  listContainer: {
    flex: 5
  },
});
