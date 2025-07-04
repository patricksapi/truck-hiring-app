
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Driver App Home</Text>
      <Button title="Start Trip" onPress={() => alert('Trip started')} />
    </View>
  );
}
