import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, Image} from 'react-native';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker'

export default function App() {

  const [image, setImage] = useState(null);

  //componentDidMountと似ている
  useEffect(() => {
    (async () => {
      if(Constants.platform.ios)  {
        const {status} = await ImagePicker.requestCameraPermissionsAsync();
        if(status != 'granted') {
          alert("フォルダにアクセスできません。");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect:[4,3],
      quality: 1
    });

    console.log(result);

    if(!result.cancelled) {
      setImage(result.uri);
    }
  };


  return (
    <View style={{flex : 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Pick Image from Folder" onPress={pickImage} />
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
