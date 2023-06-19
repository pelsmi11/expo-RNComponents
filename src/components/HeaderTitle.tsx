import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "../theme/appTheme";
import { FC } from "react";

interface Props {
  title: string;
}

export const HeaderTitle: FC<Props> = ({ title }) => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ marginTop: top + 20, marginBottom: 20 }}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
