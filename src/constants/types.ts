import { CurrentComponent } from "./typeDefaults";

export type NavbarParams = {
  setSelectedComponent: (_currentCompoent: CurrentComponent) => void;
};
