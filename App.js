import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter'

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  })
  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <Text> Loading... </Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'Inter_900Black' }}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 40,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
