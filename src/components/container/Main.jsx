import React from "react";
import SubMenu from "./SubMenu.jsx";
import { MainWrapper, MainTitle, Teste } from "../styles.js";

export default function Main() {
  return (
    <MainWrapper>
      <SubMenu />
      <MainTitle>Olá Mundo</MainTitle>
      <Teste />
    </MainWrapper>
  );
}
