import { useRouter } from "expo-router"
import { TouchableOpacity, Text } from "react-native"

export const InternalLink = ({ title, path }) => {
  const router = useRouter()

  return (
    <TouchableOpacity onPress={() => router.push(path)}>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}
