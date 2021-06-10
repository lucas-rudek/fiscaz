import React from "react";
import SubMenu from "./SubMenu.jsx";
import api from "../../services/api.js";
import { MainWrapper, MainTitle, MainInfoWrapper } from "../styles.js";

api
  .get("usuarios")
  .then((res) => console.log(res.data))
  .catch((err) => {
    console.error(err);
  });

export default function Main() {
  return (
    <MainWrapper>
      <SubMenu />
      <MainTitle>Abertura do Processo de Licitação</MainTitle>
      <MainInfoWrapper>
        <form>
          <label htmlFor="name">First name:</label>
          <br />
          <input type="text" id="name" name="name" />
          <br />
          <label htmlFor="surname">Last name:</label>
          <br />
          <input type="text" id="surname" name="surname" />
          <br />
          <button type="submit">Enviar</button>
        </form>
      </MainInfoWrapper>
    </MainWrapper>
  );
}
