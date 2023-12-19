import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { MenuProvider, Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import * as ImagePicker from 'expo-image-picker';

class ImagePopupMenu extends Component {
  state = {
    selectedImage: null,
  };

  handleImageUpload = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        this.setState({ selectedImage: { uri: result.uri } });
      }
    } catch (error) {
      console.error('Image picker error:', error);
    }
  };

  render() {
    const { selectedImage } = this.state;

    return (
      <MenuProvider>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', color: "white" }}>
          <Menu>
            <MenuTrigger text="Open Menu" />
            <MenuOptions>
              <MenuOption onSelect={() => Alert.alert('Option 1')}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image source={require('../assets/background.jpg')} style={{ width: 30, height: 30, marginRight: 10 }} />
                  <Text>Option 1</Text>
                </TouchableOpacity>
              </MenuOption>
              <MenuOption onSelect={() => Alert.alert('Option 2')}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image source={require('../assets/background.jpg')} style={{ width: 30, height: 30, marginRight: 10 }} />
                  <Text>Option 2</Text>
                </TouchableOpacity>
              </MenuOption>
              <MenuOption onSelect={this.handleImageUpload}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image source={selectedImage ? selectedImage : require('../assets/background.jpg')} style={{ width: 30, height: 30, marginRight: 10 }} />
                  <Text>{selectedImage ? 'Uploaded Image' : 'Upload Image'}</Text>
                </TouchableOpacity>
              </MenuOption>
              {/* Add more MenuOptions as needed */}
            </MenuOptions>
          </Menu>
        </View>
      </MenuProvider>
    );
  }
}

export default ImagePopupMenu;

