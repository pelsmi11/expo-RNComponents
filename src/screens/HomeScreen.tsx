import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  Platform,
  NativeModules,
  FlatList,
} from "react-native";
import { styles } from "../theme/appTheme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FlatListMenuItem } from "../components/FlatListMenuItem";
import { menuItems } from "../data";
import { HeaderTitle, ItemSeparator } from "../components";

export const HomeScreen = () => {
  return (
    <View
      style={{
        // paddingTop: Platform.OS === "android" ? StatusBarManager.HEIGHT : 0,
        ...styles.globalMargin,
        flex: 1,
      }}
    >
      <FlatList
        data={menuItems}
        renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={() => <HeaderTitle title="Opciones de Menú" />}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </View>
  );
};
