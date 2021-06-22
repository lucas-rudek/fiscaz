import React from "react";
import { useForm } from "react-hook-form";
import SubMenu from "./SubMenu.jsx";
import api from "../../services/api.js";
import { MainWrapper, MainTitle, MainInfoWrapper } from "../styles.js";

export default function Main() {
  const { register, handleSubmit } = useForm();

  async function getCadastro(res) {
    await api
      .get("/processos", res)
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.error(err);
      });
  }

  async function salvaCadastro(res) {
    await api
      .post("/processos", res)
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.error(err);
      });
  }

  async function atualizaCadastro(res) {
    await api
      .post("/processos/update/:atualiza_nome_empreendimento", res)
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.error(err);
      });
  }

  async function deleteCadastro(res) {
    await api
      .post("/processos/delete/:delete_nome_empreendimento", res)
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.error(err);
      });
  }
  //arrumar bug dos forms que enviam toda info mesmo quando n precisa,
  //ver sobre useState
  return (
    <MainWrapper>
      <SubMenu />
      <MainTitle>Abertura do Processo de Licitação</MainTitle>
      <MainInfoWrapper>
        <form onSubmit={handleSubmit(salvaCadastro)} action="/processos">
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
        <br />
        <form
          onSubmit={handleSubmit(atualizaCadastro)}
          action="/processos/update/:atualiza_nome_empreendimento"
        >
          <label htmlFor="atualiza_nome_empreendimento">
            Nome do Empreendimento:
          </label>
          <br />
          <input type="text" {...register("atualiza_nome_empreendimento")} />
          <br />
          <label htmlFor="atualiza_valor_orcado">Valor Orçado:</label>
          <br />
          <input type="text" {...register("atualiza_valor_orcado")} />
          <br />
          <label htmlFor="atualiza_autor_projeto">Autor do Projeto:</label>
          <br />
          <input type="text" {...register("atualiza_autor_projeto")} />
          <br />
          <label htmlFor="atualiza_fiscal_indicado">Fiscal Indicado:</label>
          <br />
          <input type="text" {...register("atualiza_fiscal_indicado")} />
          <br />
          <label htmlFor="atualiza_fiscal_substituto">Fiscal Substituto:</label>
          <br />
          <input type="text" {...register("atualiza_fiscal_substituto")} />
          <br />
          <button type="submit">Atualizar</button>
        </form>
        <br />
        <form
          onSubmit={handleSubmit(deleteCadastro)}
          action="/processos/delete/:delete_nome_empreendimento"
        >
          <label htmlFor="delete_nome_empreendimento">
            Nome do Empreendimento:
          </label>
          <br />
          <input type="text" {...register("delete_nome_empreendimento")} />
          <br />
          <button type="submit">Deletar</button>
        </form>
        <input type="button" value="Get" onClick={handleSubmit(getCadastro)} />
      </MainInfoWrapper>
    </MainWrapper>
  );
}
