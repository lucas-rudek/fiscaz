import React from "react";
import { SubMenuWrapper, SubMenuList } from "../styles.js";

export default function SubMenu() {
  return (
    <SubMenuWrapper>
      <SubMenuList>
        <li>
          <a href="#">Pesquisar</a>
        </li>
        <li>
          <a href="#">Processo Licitatório</a>
        </li>
        <li>
          <a href="#">Dados da Fiscalização</a>
        </li>
        <li>
          <a href="#">Documentos Fiscais</a>
        </li>
        <li>
          <a href="#">Alterações Contratuais</a>
        </li>
        <li>
          <a href="#">Medições</a>
        </li>
        <li>
          <a href="#">Conclusão</a>
        </li>
      </SubMenuList>
    </SubMenuWrapper>
  );
}
