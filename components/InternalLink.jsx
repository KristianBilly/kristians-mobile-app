import { useRouter } from "expo-router"
import { TouchableOpacity } from "react-native"

export const InternalLink = ({ children, path }) => {
  const router = useRouter()

  return (
    <TouchableOpacity onPress={() => router.push(path)}>
      {children}
    </TouchableOpacity>
  )
}
