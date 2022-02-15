import { menuItems } from "./data";
import {
  ContainerStyled,
  LabelMenuItem,
  MenuItem,
  NavStyled,
} from "./index.styles";
import { useTheme } from "next-themes";
import { Theme } from "./types";

export default function Nav() {
  const { resolvedTheme } = useTheme();

  const theme: Theme = resolvedTheme?.replace("Theme", "") || "usTheme";

  return (
    <NavStyled>
      <ContainerStyled>
        {menuItems.map(({ id, label }) => {
          return (
            <MenuItem key={id}>
              <LabelMenuItem>{label[theme]}</LabelMenuItem>
            </MenuItem>
          );
        })}
      </ContainerStyled>
    </NavStyled>
  );
}
