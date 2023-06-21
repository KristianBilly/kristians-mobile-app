import { Linking, TouchableOpacity } from "react-native"

export const ExternalLink = ({ children, url }) => {
  return (
    <TouchableOpacity onPress={() => Linking.openURL(url)}>
      {children}
    </TouchableOpacity>
  )
}
