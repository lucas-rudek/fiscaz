import React from "react";
import { ContainerWrapper } from "../styles.js";
import SideBar from "./SideBar.jsx";
import Main from "./Main.jsx";

export default function Container() {
  return (
    <ContainerWrapper>
      <SideBar />
      <Main />
    </ContainerWrapper>
  );
}
