import { InternalLink } from "./InternalLink"
import { StyledView } from "./styles/StyledView"
import { FlatList, Text, StyleSheet, View, StatusBar } from "react-native"

const navigationData = [
  { path: "/", text: "Home Page" },
  { path: "/secondscreen", text: "Second Screen" },
  { path: "/thirdscreen", text: "Third Screen" },
]

export const Navigation = () => {
  const componentToBeMappedOver = ({ item }) => (
    <View style={styles.container}>
      <InternalLink path={item.path}>
        <Text>{item.text}</Text>
      </InternalLink>
    </View>
  )

  return (
    <StyledView>
      <FlatList
        data={navigationData}
        renderItem={componentToBeMappedOver}
        keyExtractor={(item) => item.path}
        horizontal={true}
      />
    </StyledView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: StatusBar.currentHeight || 0,
  },
})
