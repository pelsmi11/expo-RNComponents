import { Text, View, StyleSheet } from "react-native";
import { CustomSwitch, HeaderTitle } from "../components";
import { useState } from "react";
import { useThemeContext } from "../hooks";

interface IState {
  isActive: boolean;
  isHungry: boolean;
  isHappy: boolean;
}

export const SwitchScreen = () => {
  const [state, setState] = useState<IState>({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  const { isActive, isHappy, isHungry } = state;

  const {
    theme: { colors },
  } = useThemeContext();

  const onChange = (value: boolean, field: keyof IState) => {
    setState({
      ...state,
      [field]: value,
    });
  };
  return (
    <View style={{ marginHorizontal: 20 }}>
      <HeaderTitle title="Switches" />
      <View style={styles.switchRow}>
        <Text style={{ ...styles.switchText, color: colors.text }}>
          isActive
        </Text>
        <CustomSwitch
          isOn={isActive}
          onCustomChange={(isActive) => onChange(isActive, "isActive")}
        />
      </View>
      <View style={styles.switchRow}>
        <Text style={{ ...styles.switchText, color: colors.text }}>
          isHungry
        </Text>
        <CustomSwitch
          isOn={isHungry}
          onCustomChange={(isHungry) => onChange(isHungry, "isHungry")}
        />
      </View>
      <View style={styles.switchRow}>
        <Text style={{ ...styles.switchText, color: colors.text }}>
          isHappy
        </Text>
        <CustomSwitch
          isOn={isHappy}
          onCustomChange={(isHappy) => onChange(isHappy, "isHappy")}
        />
      </View>

      <Text style={{ ...styles.switchText, color: colors.text }}>
        {JSON.stringify(state, null, 5)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  switchText: {
    fontSize: 25,
  },
  switchRow: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
