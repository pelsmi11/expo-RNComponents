import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MenuItem } from "../interfaces/appInterfaces";
import { useNavigation, useTheme } from "@react-navigation/native";
import { navigationPropList } from "../navigator/types";
import { useThemeContext } from "../hooks";

interface Props {
  menuItem: MenuItem;
}

export const FlatListMenuItem = ({ menuItem }: Props) => {
  const navigation = useNavigation<navigationPropList>();
  const {
    theme: { colors },
  } = useThemeContext();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate(menuItem.component)}
    >
      <View style={styles.container}>
        <Ionicons
          name={menuItem.icon as any}
          size={23}
          color={colors.primary}
        />
        <Text style={{ ...styles.itemText, color: colors.text }}>
          {menuItem.name}
        </Text>
        <View style={{ flex: 1 }} />
        <Ionicons
          name="chevron-forward-outline"
          size={23}
          color={colors.primary}
        />
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
