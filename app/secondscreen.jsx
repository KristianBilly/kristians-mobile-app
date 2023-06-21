import { SafeAreaWrapper } from "../components/SafeAreaWrapper"
import { InternalLink } from "../components/InternalLink"

const YoloScreen = () => {
  return (
    <SafeAreaWrapper>
      <InternalLink
        title="Go To Home Page"
        path="/"
      />
    </SafeAreaWrapper>
  )
}

export default YoloScreen
