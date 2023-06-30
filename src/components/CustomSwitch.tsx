import { FC, useState } from "react";
import { Platform, Switch, SwitchProps } from "react-native";
import { useThemeContext } from "../hooks";

interface Props extends SwitchProps {
  isOn: boolean;
  onCustomChange: (value: boolean) => void;
}

export const CustomSwitch: FC<Props> = ({ isOn, onCustomChange, ...rest }) => {
  const [isEnabled, setIsEnabled] = useState(isOn);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onCustomChange(!isEnabled);
  };
  const {
    theme: { colors },
  } = useThemeContext();
  return (
    <Switch
      {...rest}
      trackColor={{ false: "#d9d9db", true: colors.primary }}
      thumbColor={Platform.OS === "android" ? colors.primary : ""}
      // ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};
