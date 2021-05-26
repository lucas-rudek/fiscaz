import React from "react";
import { SideBarWrapper, SideBarList } from "../styles.js";

export default function SideBar() {
  return (
    <SideBarWrapper>
      <SideBarList>
        <li>
          <a href="#">Página Inicial</a>
        </li>
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
        <li>
          <a href="#">Sair</a>
        </li>
      </SideBarList>
    </SideBarWrapper>
  );
}
