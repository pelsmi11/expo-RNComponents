import { Theme } from "@react-navigation/native";

export interface ThemeState extends Theme {
  currentTheme: "light" | "dark";
  dividerColor: string;
}
