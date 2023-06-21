import { Image, StyleSheet } from "react-native"

export const StyledImage = ({ source, size }) => {
  return (
    <Image
      source={source}
      style={size === "small" ? styles.logoSmall : styles.logoLarge}
    />
  )
}

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
