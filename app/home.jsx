import { View, Text, TouchableOpacity } from "react-native"
import { SafeAreaWrapper } from "../components/SafeAreaWrapper"
import { useRouter } from "expo-router"

const Home = () => {
  const router = useRouter()

  return (
    <SafeAreaWrapper>
      <View>
        <Text>Kristian first line</Text>
        <Text>Kristian second line</Text>
        <TouchableOpacity onPress={() => router.push("/secondscreen")}>
          <Text>Link to second screen</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaWrapper>
  )
}

export default Home
