import { StyleSheet, Image } from "react-native"
import { SafeAreaWrapper } from "../components/SafeAreaWrapper"
import { images } from "../assets/images/images"
import { StyledView } from "../components/styles/StyledView"
import { StyledLink } from "../components/styles/StyledLink"
import { externalSites } from "../constants/externalSites"
import { StyledImage } from "../components/styles/StyledImage"
import { StyledText } from "../components/styles/StyledText"
import { Navigation } from "../components/Navigation"

const Home = () => {
  return (
    <SafeAreaWrapper>
      <Navigation />
      <StyledView>
        <StyledText>Nothing happens when you click me</StyledText>
        <StyledImage
          source={images.blueArrow}
          size="small"
        />
      </StyledView>
      <StyledView>
        <StyledText>Go to Google</StyledText>
        <StyledLink path={externalSites.google}>
          <StyledImage source={images.googleLogo} />
        </StyledLink>
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
