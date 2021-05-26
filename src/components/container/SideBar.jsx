import React from "react";
import { SideBarWrapper, SideBarList } from "../styles.js";

export default function SideBar() {
  return (
    <SideBarWrapper>
      <SideBarList>
        <li>
          <a href="#">Oportunidades de Negócio</a>
        </li>
        <li>
          <a href="#">Postar Anúncio</a>
        </li>
        <li>
          <a href="#">Controle de estoque e documentos</a>
        </li>
        <li>
          <a href="#">Gerenciamento de Caixa</a>
        </li>
        <li>
          <a href="#">Emitir Nota Fiscal</a>
        </li>
        <li>
          <a href="#">Suporte</a>
        </li>
      </SideBarList>
    </SideBarWrapper>
  );
}
