import { createStackNavigator } from "@react-navigation/stack";
import {
  AlertScreen,
  Animation101Screen,
  Animation102Screen,
  HomeScreen,
  SwitchScreen,
} from "../screens";
import { RootStackParamList } from "./types";
import { TextInputScreen } from "../screens/TextInputScreen";

const Stack = createStackNavigator<RootStackParamList>();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
      <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
      <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
      <Stack.Screen name="AlertScreen" component={AlertScreen} />
      <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
    </Stack.Navigator>
  );
};
