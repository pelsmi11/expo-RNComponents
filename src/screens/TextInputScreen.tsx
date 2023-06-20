import {
  Keyboard,
  KeyboardAvoidingView,
  NativeModules,
  Platform,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import { CustomSwitch, CustomSwitchNew, HeaderTitle } from "../components";
import { styles as globalStyle } from "../theme/appTheme";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useForm } from "../hooks";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { StatusBarManager } = NativeModules;

export const TextInputScreen = () => {
  const { top } = useSafeAreaInsets();
  const { isSubscribed, form, onChange } = useForm({
    name: "",
    email: "",
    phone: "",
    isSubscribed: false,
  });
  //   const toggleSwitch = () => onChange(!isSubscribed, "isSubscribed");
  return (
    <KeyboardAvoidingView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBarManager.HEIGHT : top,
      }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView>
        {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
        <View style={globalStyle.globalMargin}>
          <HeaderTitle title="Text Input" />
          <TextInput
            style={styles.inputStyle}
            placeholder="Ingrese su nombre"
            autoCorrect={false}
            autoCapitalize="words"
            onChangeText={(value) => onChange(value, "name")}
          />
          <TextInput
            style={styles.inputStyle}
            placeholder="Ingrese su email"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(value) => onChange(value, "email")}
            keyboardType="email-address"
          />
          <View style={styles.switchRow}>
            <Text style={styles.switchText}>isSubscribed</Text>
            <CustomSwitchNew
              value={isSubscribed}
              onValueChange={(value) => onChange(value, "isSubscribed")}
              style={{ marginRight: 10 }}
            />
          </View>
          <HeaderTitle title={JSON.stringify(form, null, 5)} />
          <HeaderTitle title={JSON.stringify(form, null, 5)} />
          <TextInput
            style={styles.inputStyle}
            placeholder="Ingrese su telefono"
            onChangeText={(value) => onChange(value, "phone")}
            keyboardType="phone-pad"
          />
          <View style={{ height: 100 }} />
        </View>
        {/* </TouchableWithoutFeedback> */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  switchText: {
    fontSize: 25,
  },
  switchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
