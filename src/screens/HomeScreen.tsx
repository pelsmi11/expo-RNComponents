import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  Platform,
  NativeModules,
  FlatList,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

interface MenuItem {
  name: string;
  icon: string;
  components: string;
}

const menuItems: MenuItem[] = [
  {
    name: "Animation 101",
    icon: "cube-outline",
    components: "Animation101Screen",
  },
];

export const HomeScreen = () => {
  const { StatusBarManager } = NativeModules;

  const rednerMenuItem = (menuItem: MenuItem) => {
    return (
      <View>
        <Text>{menuItem.name}</Text>
      </View>
    );
  };

  return (
    <View
      style={{
        paddingTop: Platform.OS === "android" ? StatusBarManager.HEIGHT : 0,
        backgroundColor: "red",
        flex: 1,
      }}
    >
      <SafeAreaView>
        <FlatList
          data={menuItems}
          renderItem={({ item }) => rednerMenuItem(item)}
          keyExtractor={(item) => item.name}
        />
      </SafeAreaView>
    </View>
  );
};
