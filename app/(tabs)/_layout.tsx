import { router, Tabs } from "expo-router";
import React, { useEffect, useState } from "react";
import { Button, Platform, Text, TextInput, View } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useAuth } from "../context/AuthContext";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { isLogged, signIn, signOut } = useAuth();

  return (
    <>
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
            headerShown: false,
            tabBarButton: HapticTab,
            tabBarBackground: TabBarBackground,
            tabBarStyle: Platform.select({
              ios: {
                // Use a transparent background on iOS to show the blur effect
                position: "absolute",
              },
              default: {},
            }),
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              title: "Home",
              tabBarIcon: ({ color }) => (
                <IconSymbol size={28} name="house.fill" color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="explore"
            options={{
              title: "Avisos",
              tabBarIcon: ({ color }) => (
                <IconSymbol size={28} name="paperplane.fill" color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="user-area"
            options={{
              title: "User",
              tabBarIcon: ({ color }) => (
                <IconSymbol size={28} name="person.2.badge.key" color={color} />
              ),
            }}
          />
        </Tabs>
    </>
  );
}
