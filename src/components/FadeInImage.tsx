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
import { useAnimation } from "../hooks";

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImage: FC<Props> = ({ uri, style }) => {
  const { opacity, fadeIn } = useAnimation();
  const [isLoading, setIsLoading] = useState(true);
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
          color="#5856D6"
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
