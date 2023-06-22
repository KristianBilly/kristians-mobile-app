import React, { useEffect, useState } from "react"
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import * as SQLite from "expo-sqlite"
import GatedContent from "./gatedcontent"
import { useRouter } from "expo-router"
const db = SQLite.openDatabase("authentication.db")

export default function App() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [authenticated, setAuthenticated] = useState(false)
  const [status, setStatus] = useState("")
  const router = useRouter()

  useEffect(() => {
    // Create user table
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT NOT NULL, password TEXT NOT NULL);"
      )
    })
  }, [])

  const showMessage = (message) => {
    setStatus(message)
    const timer = setTimeout(() => {
      setStatus("")
    }, 1000)
    return () => clearTimeout(timer)
  }

  const loginUser = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM users WHERE username = ? AND password = ?;",
        [username, password],
        (_, { rows }) => {
          if (rows.length > 0) {
            console.log("User logged in successfully.")
            setAuthenticated(true)
          } else {
            showMessage("Invalid username or password.")
          }
        }
      )
    })
  }

  const handleLogout = () => {
    setAuthenticated(false)
  }

  const renderContent = () => {
    if (authenticated) {
      return <GatedContent handleLogout={handleLogout} />
    } else {
      return (
        <View>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={loginUser}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/registeruser")}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/userlist")}>
            <Text style={styles.buttonText}>Registered Users</Text>
          </TouchableOpacity>
          {status ? <Text style={styles.message}>{status}</Text> : null}
        </View>
      )
    }
  }

  return <View style={styles.container}>{renderContent()}</View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 200,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
})
