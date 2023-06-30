import { FC, createContext } from "react";
import { ThemeState } from "../../interfaces/theme.interface";

interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);
