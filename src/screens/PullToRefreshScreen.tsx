import { ScrollView, View, RefreshControl } from "react-native";
import { HeaderTitle } from "../components";
import { styles } from "../theme/appTheme";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

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
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={10}
          progressBackgroundColor={"#5856D6"}
          colors={["white", "red", "gray"]}
          style={{ backgroundColor: "#5856D6" }}
          tintColor={"white"}
          title="refreshing"
          titleColor={"white"}
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
