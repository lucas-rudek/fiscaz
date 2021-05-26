import React from "react";
import SubMenu from "./SubMenu.jsx";
import { MainWrapper, MainTitle } from "../styles.js";

export default function Main() {
  return (
    <MainWrapper>
      <SubMenu />
      <MainTitle />
    </MainWrapper>
  );
}
