import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from "./Header";

const NumberScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Icon name="hashtag" size={40} color="white" style={{ marginRight: 2 }} />
        <TextInput
          style={styles.input}
          placeholder="...."
          placeholderTextColor="white"
          selectionColor="royalblue" // Set the cursor color
          keyboardType="numeric" // Only allow numeric input
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          icon={<Icon name="book" size={20} color="white" />}
          title="Open"
          onPress={() => {
            // Handle button press
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
    marginBottom: 5,
    width: "80%",
    textAlign: 'center', // Center the input text
    borderBottomWidth: 1,
    borderBottomColor: 'royalblue', // Change border bottom color
  },
  buttonContainer: {
    width: "50%",
  }
});

export default NumberScreen;

