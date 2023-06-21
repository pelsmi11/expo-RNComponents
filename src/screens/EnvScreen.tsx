import { Text, View } from "react-native";
import { HeaderTitle } from "../components";
import constants from "expo-constants";

export const EnvScreen = () => {
  return (
    <View>
      <HeaderTitle title="Env Variables" />
      <Text>{process.env.API_URL ?? "EnvScreen"}</Text>
      <Text>{constants.expoConfig?.extra?.apiUrl ?? "not found"}</Text>
      <Text>{constants.expoConfig?.extra?.testEnv ?? "not found"}</Text>
    </View>
  );
};
