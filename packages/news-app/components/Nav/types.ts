export type MenuItemType = {
  id: number;
  route: string;
  label: {
    [x: string]: string;
  };
};

type Themes = "us" | "br" | "pt";

export type Theme = Themes | string;
