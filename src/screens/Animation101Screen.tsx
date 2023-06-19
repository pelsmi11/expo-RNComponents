import { Text, View, StyleSheet, Animated, Button, Easing } from "react-native";
import { useAnimation } from "../hooks";

export const Animation101Screen = () => {
  const { fadeIn, fadeOut, opacity, position, startMoving } = useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          opacity: opacity,
          transform: [
            {
              translateY: position,
            },
          ],
        }}
      />
      <View style={styles.containerButtons}>
        <Button
          title="FadeIn"
          onPress={() => {
            fadeIn();
            startMoving(-100);
          }}
        />
        <Button title="FadeOut" onPress={fadeOut} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  purpleBox: {
    backgroundColor: "#5856d6",
    width: 150,
    height: 150,
  },
  containerButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 16,
  },
});
