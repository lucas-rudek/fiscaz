import React from "react";
import SubMenu from "./SubMenu.jsx";
import { MainWrapper, MainTitle, MainInfoWrapper } from "../styles.js";

export default function Main() {
  return (
    <MainWrapper>
      <SubMenu />
      <MainTitle>Abertura do Processo de Licitação</MainTitle>
      <MainInfoWrapper>
        <form>
          <label for="fname">First name:</label>
          <br />
          <input type="text" id="fname" name="fname" />
          <br />
          <label for="lname">Last name:</label>
          <br />
          <input type="text" id="lname" name="lname" />
        </form>
      </MainInfoWrapper>
    </MainWrapper>
  );
}
