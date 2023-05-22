import React from "react"
import { StatusBar } from "expo-status-bar"
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Button,
  Alert,
  Image,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native"

export default function App() {
  const [text, setText] = React.useState("Hello!")

  const handlePress = () => {
    setText("Hello, World!")
  }

  const handleButtonPress = () => {
    Alert.alert("Title", "Text", [
      { text: "Ok", onPress: () => console.log("Ok") },
      { text: "Cancel", onPress: () => console.log("Cancel") },
    ])
  }

  const handleButtonPressPromt = () => {
    Alert.prompt("Title", "Text", (text) => console.log(text))
  }

  const handleImagePress = () => {
    console.log("Image")
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} style={styles.text} onPress={handlePress}>
        {text}
      </Text>
      <Button title="Open alert" onPress={handleButtonPress} />
      <Button title="Open promt" onPress={handleButtonPressPromt} />
      <TouchableWithoutFeedback onPress={handleImagePress}>
        <Image style={styles.image} source={require("./assets/adaptive-icon.png")} />
      </TouchableWithoutFeedback>

      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f2",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: "16px",
    color: "#261130",
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
  },
})
