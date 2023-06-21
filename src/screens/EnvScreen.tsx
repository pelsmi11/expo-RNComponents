import { Text, View } from "react-native";
import { HeaderTitle } from "../components";

export const EnvScreen = () => {
  return (
    <View>
      <HeaderTitle title="Env Variables" />
      <Text>{process.env.API_URL ?? "EnvScreen"}</Text>
    </View>
  );
};
