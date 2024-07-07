import { StyleSheet, View, Text } from "react-native";
import { Slot, Stack } from "expo-router";

const RootLayout = () => {
  return (
   <Stack>
     <Stack.Screen name="index" options={{ headerShown: true}} />
   </Stack>
  )
}


export default RootLayout;