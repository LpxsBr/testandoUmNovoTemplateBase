import { Button, Text, View } from "react-native";
import { useAuth } from "../context/AuthContext";
import { router, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { TextInput } from "react-native-gesture-handler";

export default function Logged() {
  const { isLogged, signIn } = useAuth();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
    <Stack.Screen options={{ title: "Login" }} />
          <View
            style={{
              display: "flex",
              padding: 10,
              gap: 20,
            }}
          >
            <View
              style={{
                display: "flex",
                width: "100%",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "#fff" }}>Usuário</Text>
              <TextInput
                style={{
                  backgroundColor: "white",
                  borderRadius: 4,
                  width: "100%",
                  height: 40,
                }}
                value={user}
                onChangeText={(event) => setUser(event)}
              />
            </View>

            <View
              style={{
                display: "flex",
                width: "100%",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "#fff" }}>Senha</Text>
              <TextInput
                style={{
                  backgroundColor: "white",
                  borderRadius: 4,
                  width: "100%",
                  height: 40,
                }}
                value={password}
                onChangeText={(event) => setPassword(event)}
              />
            </View>
            <Button
              title="logar"
              onPress={() => {
                signIn({
                  username: user,
                  password,
                });
              }}
            />
            {/* <Button title='deslogar' onPress={() => {
      signOut()
    }} /> */}
          </View>
        </>
  );
}
