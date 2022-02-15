export type MenuItemType = {
  id: number;
  route: string;
  label: {
    [x: string]: string;
  };
};

type Themes = "usTheme" | "brTheme" | "ptTheme";

export type Theme = Themes | string;
