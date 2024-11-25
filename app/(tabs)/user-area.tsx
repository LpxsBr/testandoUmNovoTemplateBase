import { Button, Image, Text, View } from "react-native";
import { useAuth } from "../context/AuthContext";

export default function UserArea(){

    const { signOut } = useAuth()

    return(
        <View>
            <Text style={{color: '#fff'}}>User</Text>
            <View>
                <Image source={{uri: '/assets/images/react-logo@3x.png'}} width={200} height={200} />
            </View>
            <Button title="Deslogar" onPress={() => signOut()} />
        </View>
    )
}