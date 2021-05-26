import React from "react";
import {
  SideBarWrapper,
  SideBarList,
  SubMenuTitle,
  LastSubMenuTitle
} from "../styles.js";

export default function SideBar() {
  return (
    <SideBarWrapper>
      <SubMenuTitle>
        <a href="#">Pagina Inicial</a>
      </SubMenuTitle>
      <SideBarList>
        <li>
          <a href="#">Abrir Fiscalização</a>
        </li>
        <li>
          <a href="#">Acompanhamento de Fiscalização</a>
        </li>
        <li>
          <a href="#">Fiscalizações Concluídas</a>
        </li>
        <li>
          <a href="#">Histórico de Alterações</a>
        </li>
      </SideBarList>
      <LastSubMenuTitle>
        <a href="#">Sair</a>
      </LastSubMenuTitle>
    </SideBarWrapper>
  );
}
