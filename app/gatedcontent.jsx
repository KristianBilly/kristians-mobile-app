import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

const GatedContent = ({ handleLogout }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You are now logged in.</Text>
      <Text style={styles.text}>This is Gated content</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogout}>
        <Text style={styles.buttonText}>Log out</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
})

export default GatedContent
