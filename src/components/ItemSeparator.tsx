import { View } from "react-native";
import { useThemeContext } from "../hooks";

export const ItemSeparator = () => {
  const {
    theme: { dividerColor },
  } = useThemeContext();
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderColor: dividerColor,
        marginVertical: 8,
      }}
    />
  );
};
