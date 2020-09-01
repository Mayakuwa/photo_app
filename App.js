import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
  return (
    <View style={{flex : 1, aligItem: 'center', justifyContent: 'center'}}>
      <Button title="Pick Image from Folder" onPress={() => alert("hello")} />
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
