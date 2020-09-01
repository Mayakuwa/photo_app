import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, Image } from 'react-native';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import Color from "./src/color/color.js"

export default function App() {
  const [image, setImage] = useState(null);

  // componentDidMountと似ている

  useEffect(() => {
    (async () => {
      if(Constants.platform.ios)  {
        const {status} = await ImagePicker.requestCameraPermissionsAsync();
        if (status != 'granted') {
          alert("フォルダにアクセスできません。");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect:[4, 3],
      quality: 1,
    });

    console.log(result);

    if(!result.cancelled) {
      setImage(result.uri);
    }
  };

  const takeImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect:[4, 3],
      quality: 1,
    });

    // eslint-disable-next-line no-console
    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  }


  return (
    <View style={{flex : 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Pick Image from Folder" color={Color.lightYellow} onPress={pickImage} />
      <Button title="Take Photo" color={Color.lightYellow} onPress={takeImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200}}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
