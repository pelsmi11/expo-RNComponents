import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import { FadeInImage, HeaderTitle } from "../components";
import { useState } from "react";
import { useThemeContext } from "../hooks";

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }
    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1500);
  };

  const renderItem = (itemN: number) => {
    return (
      //   <Image
      //     source={{ uri: `https://picsum.photos/id/${itemN}/500/400` }}
      //     style={{ width: "100%", height: 400 }}
      //     resizeMode="cover"
      //   />
      <FadeInImage
        uri={`https://picsum.photos/id/${itemN}/500/400`}
        style={{ width: "100%", height: 400 }}
      />
    );
  };
  const {
    theme: { colors, dividerColor, dark },
  } = useThemeContext();
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={numbers}
        keyExtractor={(item, index) => item + index + ""}
        renderItem={({ item }) => renderItem(item)}
        ListHeaderComponent={
          <View style={{ marginHorizontal: 20 }}>
            <HeaderTitle title="Infinite Scroll" />
          </View>
        }
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          <View
            style={{
              height: 100,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ActivityIndicator size={30} color={colors.primary} />
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textItem: {
    backgroundColor: "green",
    height: 150,
  },
});
