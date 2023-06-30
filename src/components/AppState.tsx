import { FC } from "react";
import { ThemeProvider } from "../context";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const AppState: FC<Props> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
