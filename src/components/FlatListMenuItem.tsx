import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MenuItem } from "../interfaces/appInterfaces";
import { useNavigation } from "@react-navigation/native";
import { navigationPropList } from "../navigator/types";

interface Props {
  menuItem: MenuItem;
}

export const FlatListMenuItem = ({ menuItem }: Props) => {
  const navigation = useNavigation<navigationPropList>();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate(menuItem.component)}
    >
      <View style={styles.container}>
        <Ionicons name={menuItem.icon as any} size={23} color="#5856D6" />
        <Text style={styles.itemText}>{menuItem.name}</Text>
        <View style={{ flex: 1 }} />
        <Ionicons name="chevron-forward-outline" size={23} color="#5856D6" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  itemText: {
    marginLeft: 10,
    fontSize: 18,
  },
});
