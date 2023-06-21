import { useRouter } from "expo-router"
import { SafeAreaWrapper } from "../components/SafeAreaWrapper"
import { TouchableOpacity, Text } from "react-native"

const YoloScreen = () => {
  const router = useRouter()

  return (
    <SafeAreaWrapper>
      <TouchableOpacity onPress={() => router.push("/")}>
        <Text>Go to Home Screen</Text>
      </TouchableOpacity>
    </SafeAreaWrapper>
  )
}

export default YoloScreen
