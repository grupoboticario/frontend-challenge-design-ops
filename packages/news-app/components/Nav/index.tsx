import { menuItems } from "./data";
import {
  ContainerStyled,
  LabelMenuItem,
  MenuItem,
  NavStyled,
} from "./index.styles";
import { useTheme } from "next-themes";
import { Theme } from "types/theme";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Nav() {
  const { resolvedTheme } = useTheme();
  const theme: Theme = resolvedTheme?.replace("Theme", "") || "us";

  const router = useRouter();
  const { category } = router.query;
  const page = category ? category : "";

  return (
    <NavStyled>
      <ContainerStyled>
        {menuItems.map(({ id, label, route }) => {
          return (
            <Link key={id} href={route} passHref>
              <MenuItem
                active={router.route !== "/search" && `/${page}` === route}
              >
                <LabelMenuItem>{label[theme]}</LabelMenuItem>
              </MenuItem>
            </Link>
          );
        })}
      </ContainerStyled>
    </NavStyled>
  );
}
