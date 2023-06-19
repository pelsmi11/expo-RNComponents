import { FC, useState } from "react";
import { Platform, Switch, SwitchProps } from "react-native";

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
  return (
    <Switch
      {...rest}
      trackColor={{ false: "#d9d9db", true: "#5856d6" }}
      thumbColor={Platform.OS === "android" ? "#5856D6" : ""}
      // ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};
