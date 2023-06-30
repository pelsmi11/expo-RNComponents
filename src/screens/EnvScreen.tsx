import { Text, View } from "react-native";
import { HeaderTitle } from "../components";
import constants from "expo-constants";
import { useThemeContext } from "../hooks";

export const EnvScreen = () => {
  const {
    theme: { colors, dividerColor, dark },
  } = useThemeContext();
  return (
    <View>
      <HeaderTitle title="Env Variables" />
      <Text style={{ color: colors.text }}>
        {process.env.API_URL ?? "EnvScreen"}
      </Text>
      <Text style={{ color: colors.text }}>
        {constants.expoConfig?.extra?.apiUrl ?? "not found"}
      </Text>
      <Text style={{ color: colors.text }}>
        {constants.expoConfig?.extra?.testEnv ?? "not found"}
      </Text>
    </View>
  );
};
