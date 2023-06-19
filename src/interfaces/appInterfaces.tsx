import { RootStackParamList } from "../navigator/types";

export interface MenuItem {
  name: string;
  icon: string;
  component: keyof RootStackParamList;
}
