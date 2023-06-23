import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import i18n from "../i18n"
import { useRouter } from "expo-router"

const App = () => {
  const router = useRouter()

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{i18n.t("greeting")}</Text>
      <TouchableOpacity onPress={() => router.push("/home")}>
        <Text>Go to home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default App
