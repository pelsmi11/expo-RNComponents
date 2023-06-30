import {
  Dimensions,
  Image,
  NativeModules,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from "react-native";
import { HeaderTitle } from "../components";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Slide, SlideShowData } from "../data";
import { FC, useRef, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useAnimation, useThemeContext } from "../hooks";
import { StackScreenProps } from "@react-navigation/stack";

const { StatusBarManager } = NativeModules;

interface Props extends StackScreenProps<any, any> {}

export const SlidesScreen: FC<Props> = ({ navigation }) => {
  const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

  const [activeIndex, setActiveIndex] = useState(0);
  const isVisible = useRef(false);

  const { opacity, fadeIn, fadeOut } = useAnimation();

  const {
    theme: { colors, dividerColor, dark },
  } = useThemeContext();

  const renderItem = (item: Slide) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.background,
          borderRadius: 5,
          padding: 40,
          justifyContent: "center",
        }}
      >
        <Image
          source={item.img}
          style={{ width: "100%", height: 400, resizeMode: "contain" }}
        />
        <Text style={{ ...styles.title, color: colors.primary }}>
          {item.title}
        </Text>
        <Text style={{ ...styles.subTitle, color: colors.text }}>
          {item.desc}
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ ...statusBar.container, flex: 1 }}>
      <Carousel
        data={SlideShowData}
        renderItem={({ item }: { item: Slide }) => renderItem(item)}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout="default"
        vertical={false}
        onSnapToItem={(index) => {
          setActiveIndex(index);
          if (index === 2) {
            isVisible.current = true;
            fadeIn();
          } else {
            fadeOut();
            isVisible.current = false;
          }
        }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Pagination
          dotsLength={SlideShowData.length}
          activeDotIndex={activeIndex}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 10,
            backgroundColor: colors.primary,
          }}
        />
        <Animated.View style={{ opacity }}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              backgroundColor: colors.primary,
              width: 140,
              height: 50,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
            activeOpacity={0.9}
            onPress={() => {
              if (isVisible.current) {
                navigation.navigate("HomeScreen");
              }
            }}
          >
            <Text style={{ fontSize: 20, color: "white" }}>Entrar</Text>
            <Ionicons
              name="chevron-forward-outline"
              color={"white"}
              size={30}
            />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

const statusBar = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBarManager.HEIGHT + 50 : 50,
  },
});

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#5856D6",
  },
  subTitle: {
    fontSize: 16,
  },
});
