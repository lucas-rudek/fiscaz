import React from "react";
import { SubMenuWrapper, SubMenuList } from "../styles.js";

export default function SubMenu() {
  return (
    <SubMenuWrapper>
      <SubMenuList>
        <li>
          <a href="#">Oportunidades</a>
        </li>
        <li>
          <a href="#">Leilões</a>
        </li>
        <li>
          <a href="#">Favoritos</a>
        </li>
        <li>
          <a href="#">Conectar WhatsApp</a>
        </li>
      </SubMenuList>
    </SubMenuWrapper>
  );
}
