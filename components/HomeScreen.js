import { Text, View, Modal } from 'react-native';
import tw from 'twrnc'
import { useState } from 'react';

export default function HomeScreen() {
  const [user, setUser] = useState({
    email: "",
    username: "",
    uid: ""
  })

  const [showLogin, setShowLogin] = useState(true)


  return (
    <View style={tw`h-full flex flex-row flex-col items-center justify-center`}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={showLogin}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.")
          setShowLogin(!setShowLogin)
        }}
      >
        <View>
          <Text>hi</Text>
        </View>
      </Modal>
      <View style={tw`text-center`}>
        <Text>Home Screen</Text>
      </View>
      <View style={tw`text-center`}>
        <Text>Home Screen</Text>
      </View>
    </View>
  )
}
