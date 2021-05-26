import React from "react";
import { SideBarWrapper, SideBarList } from "../styles.js";

export default function SideBar() {
  return (
    <SideBarWrapper>
      <a href="#">Página Inicial</a>
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
      <a href="#">Sair</a>
    </SideBarWrapper>
  );
}
