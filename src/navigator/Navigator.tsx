import { createStackNavigator } from "@react-navigation/stack";
import {
  AlertScreen,
  Animation101Screen,
  Animation102Screen,
  CustomSectionListScreen,
  EnvScreen,
  HomeScreen,
  InfiniteScrollScreen,
  ModalScreen,
  PullToRefreshScreen,
  SlidesScreen,
  SwitchScreen,
  TextInputScreen,
} from "../screens";
import { RootStackParamList } from "./types";

const Stack = createStackNavigator<RootStackParamList>();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
      <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
      <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
      <Stack.Screen name="AlertScreen" component={AlertScreen} />
      <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
      <Stack.Screen
        name="PullToRefreshScreen"
        component={PullToRefreshScreen}
      />
      <Stack.Screen name="EnvScreen" component={EnvScreen} />
      <Stack.Screen
        name="CustomSectionListScreen"
        component={CustomSectionListScreen}
      />
      <Stack.Screen name="ModalScreen" component={ModalScreen} />
      <Stack.Screen
        name="InfiniteScrollScreen"
        component={InfiniteScrollScreen}
      />
      <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
    </Stack.Navigator>
  );
};
