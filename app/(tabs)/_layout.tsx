import { router, Tabs } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Button, Platform, TextInput, View } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useAuth } from '../context/AuthContext';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const {isLogged, signIn, signOut } = useAuth()

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log('1');

    if(isLogged){
      console.log('2');
      router.push('/screens/Logged')
    }
  }, [isLogged])

  return (
    <>
    <View style={{
      display: 'flex',
      padding: 10,
      gap: 20
    }}>

    <TextInput style={{backgroundColor: 'white'}} value={user} onChangeText={(event)=>setUser(event)} />
    <TextInput style={{backgroundColor: 'white'}} value={password} onChangeText={(event)=>setPassword(event)} />
    <Button title='logar' onPress={() => {
      signIn({
        username: user,
        password
      })
    }} />
    <Button title='deslogar' onPress={() => {
      signOut()
    }} />
    </View>
    </>
    // <Tabs
    //   screenOptions={{
    //     tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
    //     headerShown: false,
    //     tabBarButton: HapticTab,
    //     tabBarBackground: TabBarBackground,
    //     tabBarStyle: Platform.select({
    //       ios: {
    //         // Use a transparent background on iOS to show the blur effect
    //         position: 'absolute',
    //       },
    //       default: {},
    //     }),
    //   }}>
    //   <Tabs.Screen
    //     name="index"
    //     options={{
    //       title: 'Home',
    //       tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
    //     }}
    //   />
    //   <Tabs.Screen
    //     name="explore"
    //     options={{
    //       title: 'Explore',
    //       tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
    //     }}
    //   />
    // </Tabs>
  );
}
