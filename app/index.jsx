import { View, Text, TouchableOpacity } from "react-native"
import { SafeAreaWrapper } from "../components/SafeAreaWrapper"
import { useInternalRoute } from "../utils/useInternalRoute"

const Home = () => {
  return (
    <SafeAreaWrapper>
      <View>
        <Text>Kristian first line</Text>
        <Text>Kristian second line</Text>
        <TouchableOpacity onPress={() => useInternalRoute("/secondscreen")}>
          <Text>Link to second screen</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaWrapper>
  )
}

export default Home
