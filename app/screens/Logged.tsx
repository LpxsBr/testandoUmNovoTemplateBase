import { Button, Text, View } from "react-native";
import { useAuth } from "../context/AuthContext";
import { router, Stack } from "expo-router";
import { useEffect } from "react";

export default function Logged() {
  const { isLogged, signOut } = useAuth();

//   useEffect(() => {
//     console.log('1');

//     if(!isLogged){
//       router.push('/')
//     }
//   }, [isLogged])

  return (
    <>
      <Stack.Screen options={{ title: "Logged" }} />
      <View>
        <Text>Estou logado</Text>
        <Button title="Deslogar" onPress={() => signOut()} />
      </View>
    </>
  );
}
