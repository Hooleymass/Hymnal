import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import Icon from '../../constants/Icon';

const NumberScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Icon name="hashtag" type="fontawesome5" size={40} color="white" style={{ marginRight: 2 }} />
        <TextInput
          style={styles.input}
          placeholder="...."
          placeholderTextColor="white"
          selectionColor="royalblue"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          icon={<Icon name="auto-stories" size={20} color="white" />}
          title="Open"
          onPress={() => {
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#eee",
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: "grey",
    width: "50%",
    borderRadius: 8,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 40,
    color: "white",
    marginBottom: 8,
    paddingBottom: -10,
    marginRight: 10,
    width: "60%",
    textAlign: 'center', // Center the input text
    borderBottomWidth: 1,
    borderBottomColor: 'royalblue', // Change border bottom color
  },
  buttonContainer: {
    width: "50%",
  }
});

export default NumberScreen;

