import { ThemeState } from "../../interfaces/theme.interface";

type ThemeAction =
  | { type: "set_light_theme"; payload: ThemeState }
  | { type: "set_dark_theme"; payload: ThemeState };

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction
): ThemeState => {
  switch (action.type) {
    case "set_light_theme":
      return { ...state, ...action.payload };
    case "set_dark_theme":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
