import { Button, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { io } from 'socket.io-client';
import { useEffect } from 'react';



const apiCall = () => {
  // axios.get('http://localhost:8080').then((data) => {
  //   //this console.log will be in our frontend console
  //   console.log(data)
  // })
}

export default function App() {
  
  useEffect(() => {
    const socket = io("http://localhost:8080");
  }, );

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button onPress={apiCall} title='Make Call'/>
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
