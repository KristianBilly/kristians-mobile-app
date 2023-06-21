import { StyleSheet, Image } from "react-native"
import { SafeAreaWrapper } from "../components/SafeAreaWrapper"
import { InternalLink } from "../components/InternalLink"
import { images } from "../assets/images/images"
import { StyledView } from "../components/styles/StyledView"
import { ExternalLink } from "../components/ExternalLink"
import { externalSites } from "../constants/externalSites"
import { StyledImage } from "../components/styles/StyledImage"
import { StyledText } from "../components/styles/StyledText"

const Home = () => {
  return (
    <SafeAreaWrapper>
      <StyledView>
        <InternalLink path="/secondscreen">
          <StyledText>Go to Second Screen</StyledText>
        </InternalLink>
      </StyledView>
      <StyledView>
        <StyledText>Nothing happens when you click me</StyledText>
        <StyledImage
          source={images.blueArrow}
          size="small"
        />
      </StyledView>
      <StyledView>
        <StyledText>Go to Google</StyledText>
        <ExternalLink url={externalSites.google}>
          <StyledImage source={images.blueArrow} />
        </ExternalLink>
      </StyledView>
    </SafeAreaWrapper>
  )
}

export default Home

const styles = StyleSheet.create({
  logoSmall: {
    width: 100,
    height: 100,
    padding: 10,
  },
  logoLarge: {
    width: 200,
    height: 200,
    padding: 10,
  },
})
