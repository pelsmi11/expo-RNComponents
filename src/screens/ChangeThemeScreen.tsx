import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "../theme/appTheme";
import { HeaderTitle } from "../components";
import { useThemeContext } from "../hooks";

export const ChangeThemeScreen = () => {
  const { setDarkTheme, setLightTheme, theme } = useThemeContext();
  const { colors } = theme;
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Change Theme" />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            backgroundColor: colors.primary,
            width: 150,
            height: 50,
            justifyContent: "center",
            borderRadius: 20,
          }}
          onPress={setLightTheme}
        >
          <Text style={{ color: "white", textAlign: "center", fontSize: 22 }}>
            Light
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            backgroundColor: colors.primary,
            width: 150,
            height: 50,
            justifyContent: "center",
            borderRadius: 20,
          }}
          onPress={setDarkTheme}
        >
          <Text style={{ color: "white", textAlign: "center", fontSize: 22 }}>
            Dark
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
