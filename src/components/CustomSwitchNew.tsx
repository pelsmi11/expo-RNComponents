import { FC, useState } from "react";
import { Platform, Switch, SwitchProps } from "react-native";

interface Props extends SwitchProps {}

export const CustomSwitchNew: FC<SwitchProps> = ({ ...rest }) => {
  return (
    <Switch
      {...rest}
      trackColor={{ false: "#d9d9db", true: "#5856d6" }}
      thumbColor={Platform.OS === "android" ? "#5856D6" : ""}
    />
  );
};
