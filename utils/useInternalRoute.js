import { useRouter } from "expo-router"

export const useInternalRoute = (route) => {
  const router = useRouter()
  router.push(route)
}
