import styled from "styled-components";

export const AppWrapper = styled.div`
  font-family: sans-serif;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  background-color: gray;
  height: 50px;

  p {
    margin: 15px;
  }
`;

export const HeaderInfoWrapper = styled.div`
  background-color: gray;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const FooterWrapper = styled.div`
  width: 100%;
  background-color: #0f2f2a;
  height: 30px;
  display: flex;
  justify-content: flex-end;
  align-content: center;
`;

export const ContainerWrapper = styled.div`
  display: flex;
  height: 1100px;
`;

export const SideBarWrapper = styled.div`
  background-color: #8f9284;
  width: 15vw;
  a {
    margin: 3px 0px 0px 5px;
    display: inline-block;
    color: black;
    text-decoration: none;
  }
`;

export const SideBarTittle = styled.div`
  display: flex;
  margin: 20px 0px 0px 10px;
`;

export const LastSideBarTittle = styled.div`
  display: flex;
  margin: 450px 0px 0px 10px;
`;

export const SideBarList = styled.ul`
  list-style: none;
  text-align: left;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    margin: 100px 10px 100px 10px;
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: start;
  background-color: #f3f3ef;
  width: 85vw;
`;

export const MainTitle = styled.h1`
  font-size: 2.5em;
  text-align: center;
  width: 100%;
`;

export const SubMenuWrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: #cbcbc3;

  li {
    margin: 0px 50px 0px 50px;
  }

  a {
    color: black;
    text-decoration: none;
    white-space: nowrap;
  }
`;

export const SubMenuList = styled.ul`
  display: flex;
  list-style: none;
  text-align: left;
  margin: 15px 0px 15px 0px;
`;

export const Teste = styled.div`
  background-color: yellow;
  width: 100vw;
  height: 100vh;
  margin: 0 5% 0 5%;
`;
