import { menuItems } from "./data";
import {
  ContainerStyled,
  LabelMenuItem,
  MenuItem,
  NavStyled,
} from "./index.styles";

export default function Nav() {
  return (
    <NavStyled>
      <ContainerStyled>
        {menuItems.map((item) => {
          return (
            <MenuItem key={item}>
              <LabelMenuItem>{item}</LabelMenuItem>
            </MenuItem>
          );
        })}
      </ContainerStyled>
    </NavStyled>
  );
}
