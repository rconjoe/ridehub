import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter'
import HomeScreen from './components/HomeScreen'
import tw from 'twrnc'

const Stack = createNativeStackNavigator()

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  })

  if (!fontsLoaded) {
    return (
      <View style={tw`flex flex-row flex-col items-center justify-center`}>
        <Text> Loading... </Text>
      </View>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home', headerStyle: { backgroundColor: '#71797e' }, headerTintColor: '#ffffff', headerTitleStyle: { fontWeight: 'bold' } }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
