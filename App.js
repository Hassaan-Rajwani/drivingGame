import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import road from './images/1_16PZNwyrERwruo3aUhsRsw.gif'
import car from './images/car.png'

export default function App() {
  const [movement, setMovement] = useState()
  useEffect(() => {
    Accelerometer.addListener(item => {
      setMovement(
        item.x * -150
      )
    })
  }, [])
  return (
    <View style={styles.container}>
      <View style={styles.road}>
        <Image source={road} style={styles.image} />
      </View>
      <View style={styles.car}>
        <Image source={car} style={{ width: 70, height: 50, marginTop: -50, position: 'relative', left: movement }} />
      </View>
      <StatusBar style="auto" />
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
  road: {

  },
});
