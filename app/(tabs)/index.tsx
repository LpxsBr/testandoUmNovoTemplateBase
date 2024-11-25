import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  Pressable,
  ScrollView,
} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  const AREAS = [
    {
      group: "ADM",
      description: "Admin",
      icon: "house.fill",
    },
    {
      group: "ADM",
      description: "Prod.",
      icon: "house.fill",
    },
    {
      group: "ADM",
      description: "Prod.",
      icon: "house.fill",
    },
    {
      group: "ADM",
      description: "Prod.",
      icon: "house.fill",
    },
    {
      group: "ADM",
      description: "Prod.",
      icon: "house.fill",
    },
    {
      group: "ADM",
      description: "Prod.",
      icon: "house.fill",
    },
    {
      group: "ADM",
      description: "Prod.",
      icon: "house.fill",
    },
    {
      group: "ADM",
      description: "Admin",
      icon: "house.fill",
    },
    {
      group: "ADM",
      description: "Admin",
      icon: "house.fill",
    },
    {
      group: "ADM",
      description: "Admin",
      icon: "house.fill",
    },
  ];

  return (
    <View style={style.container}>
      {/* <ScrollView style={style.container_scroll} scrollEnabled> */}
        {AREAS.map((item) => {
          return (
            <Pressable
              style={style.home_btn}
              onPress={() => console.log(item.group)}
            >
              <Text style={style.home_btn_content}>{item.description}</Text>
            </Pressable>
          );
        })}
      {/* </ScrollView> */}
    </View>
  );
  //   <ParallaxScrollView
  //     headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
  //     headerImage={
  //       <Image
  //         source={require('@/assets/images/partial-react-logo.png')}
  //         style={styles.reactLogo}
  //       />
  //     }>
  //     <ThemedView style={styles.titleContainer}>
  //       <ThemedText type="title">Welcome!</ThemedText>
  //       <HelloWave />
  //     </ThemedView>
  //     <ThemedView style={styles.stepContainer}>
  //       <ThemedText type="subtitle">Step 1: Try it</ThemedText>
  //       <ThemedText>
  //         Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
  //         Press{' '}
  //         <ThemedText type="defaultSemiBold">
  //           {Platform.select({
  //             ios: 'cmd + d',
  //             android: 'cmd + m',
  //             web: 'F12'
  //           })}
  //         </ThemedText>{' '}
  //         to open developer tools.
  //       </ThemedText>
  //     </ThemedView>
  //     <ThemedView style={styles.stepContainer}>
  //       <ThemedText type="subtitle">Step 2: Explore</ThemedText>
  //       <ThemedText>
  //         Tap the Explore tab to learn more about what's included in this starter app.
  //       </ThemedText>
  //     </ThemedView>
  //     <ThemedView style={styles.stepContainer}>
  //       <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
  //       <ThemedText>
  //         When you're ready, run{' '}
  //         <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
  //         <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
  //         <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
  //         <ThemedText type="defaultSemiBold">app-example</ThemedText>.
  //       </ThemedText>
  //     </ThemedView>
  //   </ParallaxScrollView>
  // );
}

const style = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  home_btn: {
    color: "#fff",
    borderWidth: 2,
    borderColor: "#fff",
    height: 130,
    width: 130,
    borderRadius: 8,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 16,
  },
  home_btn_content: {
    color: "#fff",
  },
  container_scroll: {
    display: "flex",
    // backgroundColor: '#d07272',
    height: hp(84),
    padding: 10,
    width: wp(100),
    flexDirection: "row",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",

    flexWrap: "wrap",
    // justifyContent: 'space-around',
    gap: 24,
  },
});
