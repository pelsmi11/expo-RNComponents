import { FC, useState } from "react";
import {
  ActivityIndicator,
  Animated,
  Image,
  ImageComponent,
  ImageProps,
  ImageStyle,
  RegisteredStyle,
  StyleProp,
  View,
} from "react-native";
import { useAnimation, useThemeContext } from "../hooks";

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImage: FC<Props> = ({ uri, style }) => {
  const { opacity, fadeIn } = useAnimation();
  const [isLoading, setIsLoading] = useState(true);
  const {
    theme: { colors, dividerColor, dark },
  } = useThemeContext();
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isLoading && (
        <ActivityIndicator
          style={{ position: "absolute" }}
          color={colors.primary}
          size={30}
        />
      )}
      <Animated.Image
        onLoadEnd={() => {
          setIsLoading(false);
          fadeIn();
        }}
        source={{ uri }}
        style={{ ...(style as any), opacity }}
      />
    </View>
  );
};
