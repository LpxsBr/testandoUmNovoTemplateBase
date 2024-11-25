import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { navigate } from "expo-router/build/global-state/routing";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";

interface IContextProps{
    isLogged: Boolean,
    signIn: Function
    signOut: Function
}

interface IContext{
    children: ReactNode;
}

interface ITokenProps{
    value: string
}

const AuthContext = createContext<IContextProps>({
    isLogged: false,
    signIn: () => {},
    signOut: () => {}
})

const AuthProvider = ({children}: IContext) => {

    const [isLogged, setLogged] = useState<Boolean>(false);

    const isLoggedF = async () => {
        const token: ITokenProps = JSON.parse(String(await AsyncStorage.getItem('key-auth')));
        
        console.log({token});
        

        if(token.value == 'tokendeacessso') {
            console.log('logado')
            return setLogged(true)
        }

        console.log('nao logado')
        return setLogged(false)
        
    }

    const signIn = async ({username, password}: { username: String, password: String}) => {

        
        const token: ITokenProps = JSON.parse(String(await AsyncStorage.getItem('key-auth')));
        
        console.log({token});
        
        
        if(username == 'janselmo' && password == 'senha'){
            console.log({username, password});
            
            router.push('/screens/Logged')
            
            return await AsyncStorage.setItem('key-auth', JSON.stringify({value: 'tokendeacessso'}))
        }
        return await AsyncStorage.setItem('key-auth', JSON.stringify({value: 'none'}))
    }
    
    const signOut = async () => {
        await AsyncStorage.setItem('key-auth', JSON.stringify({value: 'none'}))
        return router.push('/(tabs)/explore')
    }

    useEffect(() => {
        isLoggedF()
    }, [])


    return(
        <AuthContext.Provider value={{isLogged, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )

}

const useAuth = () => useContext(AuthContext);

export {
    AuthProvider,
    useAuth
}