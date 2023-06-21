import { SafeAreaWrapper } from "../components/SafeAreaWrapper"
import { TouchableOpacity, Text } from "react-native"
import { useInternalRoute } from "../utils/useInternalRoute"

const YoloScreen = () => {
  return (
    <SafeAreaWrapper>
      <TouchableOpacity onPress={() => useInternalRoute("/")}>
        <Text>Go to Home Screen</Text>
      </TouchableOpacity>
    </SafeAreaWrapper>
  )
}

export default YoloScreen
