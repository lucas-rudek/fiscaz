import React from "react";
import { useForm } from "react-hook-form";
import SubMenu from "./SubMenu.jsx";
import api from "../../services/api.js";
import { MainWrapper, MainTitle, MainInfoWrapper } from "../styles.js";

export default function Main() {
  const { register, handleSubmit } = useForm();

  async function salvaCadastro(res) {
    await api
      .post("/processos", res)
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <MainWrapper>
      <SubMenu />
      <MainTitle>...</MainTitle>
      <MainInfoWrapper>
        <form onSubmit={handleSubmit(salvaCadastro)} action="/usuarios">
          <label htmlFor="nome_empreendimento">Nome do Empreendimento:</label>
          <br />
          <input type="text" {...register("nome_empreendimento")} />
          <br />
          <label htmlFor="valor_orcado">Valor Orçado:</label>
          <br />
          <input type="text" {...register("valor_orcado")} />
          <br />
          <label htmlFor="autor_projeto">Autor do Projeto:</label>
          <br />
          <input type="text" {...register("autor_projeto")} />
          <br />
          <label htmlFor="fiscal_indicado">Fiscal Indicado:</label>
          <br />
          <input type="text" {...register("fiscal_indicado")} />
          <br />
          <label htmlFor="fiscal_substituto">Fiscal Substituto:</label>
          <br />
          <input type="text" {...register("fiscal_substituto")} />
          <br />
          <button type="submit">Enviar</button>
        </form>
      </MainInfoWrapper>
    </MainWrapper>
  );
}
