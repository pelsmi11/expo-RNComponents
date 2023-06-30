import {
  DefaultTheme,
  NavigationContainer,
  DarkTheme,
  Theme,
} from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Navigator } from "./src/navigator/Navigator";
import { AppState } from "./src/components";

// const customTheme: Theme = {
//   dark: true,
//   colors: {
//     ...DefaultTheme.colors,
//     // primary: "",
//     // background: "",
//     // card: "",
//     // text: "",
//     // border: "",
//     // notification: ""
//   },
// };

export default function App() {
  return (
    <AppState>
      <Navigator />
    </AppState>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
