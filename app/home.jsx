import { View } from "react-native"
import { SafeAreaWrapper } from "../components/SafeAreaWrapper"
import { InternalLink } from "../components/InternalLink"

const Home = () => {
  return (
    <SafeAreaWrapper>
      <View>
        <InternalLink
          title="Go To Second Screen"
          path="/secondscreen"
        />
      </View>
    </SafeAreaWrapper>
  )
}

export default Home
