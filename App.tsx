import { Button, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { io } from 'socket.io-client';
import { useEffect, useState } from 'react';





export default function App() {

  const[message, setMessage] = useState()
  
  useEffect(() => {
    socket.on('chat message', (msg) => {
      setMessage(msg)
    });
  }, );

  
  const socket = io("http://localhost:8080");

  const sendMessage = () => {
    socket.emit('chat message', "This is a message from client");
  }

  return (
    <View style={styles.container}>
      <Text>{message}</Text>
      <Button onPress={sendMessage} title='Make Call'/>
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
