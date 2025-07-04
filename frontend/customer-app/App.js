
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Customer App Home</Text>
      <Button title="Book Truck" onPress={() => alert('Booking...')} />
    </View>
  );
}
