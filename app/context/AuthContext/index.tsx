import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, Dispatch, ReactNode, useContext, useEffect } from "react";

interface IContextProps{
    isLogged: Function,
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
    isLogged: () => {},
    signIn: () => {},
    signOut: () => {}
})

const AuthProvider = ({children}: IContext) => {

    const isLogged = async (): Promise<Boolean> => {
        const token: ITokenProps = JSON.parse(String(await AsyncStorage.getItem('key-auth')));
        
        console.log({token});
        

        if(token.value == 'tokendeacessso') {
            console.log('logado')
            return true
        }

        console.log('nao logado')
        return false
        
    }

    const signIn = async ({username, password}: { username: String, password: String}) => {

        
        const token: ITokenProps = JSON.parse(String(await AsyncStorage.getItem('key-auth')));
        
        console.log({token});
        
        
        if(username == 'janselmo' && password == 'senha'){
            console.log({username, password});
            
            return await AsyncStorage.setItem('key-auth', JSON.stringify({value: 'tokendeacessso'}))
        }
        return await AsyncStorage.setItem('key-auth', JSON.stringify({value: 'none'}))
    }

    const signOut = async () => {
        await AsyncStorage.setItem('key-auth', JSON.stringify({value: 'none'}))
    }

    useEffect(() => {
        isLogged()
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