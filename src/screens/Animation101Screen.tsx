import { Text, View, StyleSheet, Animated, Button, Easing } from "react-native";
import { useAnimation, useThemeContext } from "../hooks";

export const Animation101Screen = () => {
  const { fadeIn, fadeOut, opacity, position, startMoving } = useAnimation();
  const {
    theme: { colors },
  } = useThemeContext();

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          backgroundColor: colors.primary,
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
          color={colors.primary}
        />
        <Button title="FadeOut" onPress={fadeOut} color={colors.primary} />
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
    width: 150,
    height: 150,
  },
  containerButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 16,
  },
});
