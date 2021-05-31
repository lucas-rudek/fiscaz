import React from "react";
import {
  SideBarWrapper,
  SideBarList,
  SideBarTittle,
  LastSideBarTittle
} from "../styles.js";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

export default function SideBar() {
  return (
    <SideBarWrapper>
      <SideBarTittle>
        <AccountBalanceIcon />
        <a href="#">Pagina Inicial</a>
      </SideBarTittle>
      <SideBarList>
        <li>
          <DonutLargeIcon />
          <a href="#">Nova Fiscalização</a>
        </li>
        <li>
          <DonutLargeIcon />
          <a href="#">Acompanhamento de Fiscalização</a>
        </li>
        <li>
          <DonutLargeIcon />
          <a href="#">Fiscalizações Concluídas</a>
        </li>
        <li>
          <DonutLargeIcon />
          <a href="#">Histórico de Alterações</a>
        </li>
      </SideBarList>
      <LastSideBarTittle>
        <ExitToAppIcon />
        <a href="#">Sair</a>
      </LastSideBarTittle>
    </SideBarWrapper>
  );
}
