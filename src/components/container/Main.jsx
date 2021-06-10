import React from "react";
import { useForm } from "react-hook-form";
import SubMenu from "./SubMenu.jsx";
import api from "../../services/api.js";
import { MainWrapper, MainTitle, MainInfoWrapper } from "../styles.js";

export default function Main() {
  const { register, handleSubmit } = useForm();

  function salvaCadastro() {
    api
      .post("/usuarios")
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <MainWrapper>
      <SubMenu />
      <MainTitle>Abertura do Processo de Licitação</MainTitle>
      <MainInfoWrapper>
        <form onSubmit={handleSubmit(salvaCadastro)} action="/usuarios">
          <label htmlFor="name">First Name:</label>
          <br />
          <input type="text" {...register("name")} id="name" name="name" />
          <br />
          <label htmlFor="quote">Quote:</label>
          <br />
          <input type="text" {...register("quote")} id="quote" name="quote" />
          <br />
          <button type="submit">Enviar</button>
        </form>
      </MainInfoWrapper>
    </MainWrapper>
  );
}
