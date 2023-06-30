import { FC, useEffect, useReducer } from "react";
import { ThemeContext } from "./ThemeContext";
import { themeReducer } from "./themeReducer";
import { darkTheme, lightTheme } from "../../theme";
import { AppState, Appearance, useColorScheme } from "react-native";

interface Props {
  children: JSX.Element | JSX.Element[];
}
export const ThemeProvider: FC<Props> = ({ children }) => {
  // const colorScheme = useColorScheme();

  useEffect(() => {
    AppState.addEventListener("change", (status) => {
      console.log({ status });
      console.log(Appearance.getColorScheme());
      if (Appearance.getColorScheme() === "dark") {
        setDarkTheme();
      } else {
        setLightTheme();
      }
    });
  }, []);

  //SOLO EN IOS

  // useEffect(() => {
  //   if (colorScheme === "dark") {
  //     setDarkTheme();
  //   } else {
  //     setLightTheme();
  //   }
  // }, [colorScheme]);

  const [theme, dispatch] = useReducer(
    themeReducer,
    Appearance.getColorScheme() === "dark" ? darkTheme : lightTheme
  );
  const setDarkTheme = () => {
    dispatch({ type: "set_dark_theme", payload: darkTheme });
  };
  const setLightTheme = () => {
    dispatch({ type: "set_light_theme", payload: lightTheme });
  };
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setDarkTheme,
        setLightTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
