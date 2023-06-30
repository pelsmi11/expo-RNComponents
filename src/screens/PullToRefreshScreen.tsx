import { ScrollView, View, RefreshControl } from "react-native";
import { HeaderTitle } from "../components";
import { styles } from "../theme/appTheme";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useThemeContext } from "../hooks";

export const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>("");
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      setData("hola mundo");
    }, 2000);
  };
  const {
    theme: { colors, dividerColor, dark },
  } = useThemeContext();
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={10}
          progressBackgroundColor={dividerColor}
          colors={[colors.text]}
          // style={{ backgroundColor: "#5856D6" }}
          tintColor={dark ? "#FFFFFF" : "#000"}
          title="refreshing"
          // titleColor={"white"}
        />
      }
    >
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull to refresh" />

        {data ? (
          <HeaderTitle title={data} />
        ) : (
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Ionicons name="arrow-down" size={60} color="#5856D6" />
          </View>
        )}
      </View>
    </ScrollView>
  );
};
