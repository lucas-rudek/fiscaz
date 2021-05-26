import styled from "styled-components";

export const AppWrapper = styled.div`
  font-family: sans-serif;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  background-color: green;
  height: 50px;
`;

export const HeaderMenuWrapper = styled.div`
  width: 20vw;
  display: flex;

  p {
    margin-left: 60px;
  }

  img {
    width: 50px;
    height: 50px;
  }
`;

export const HeaderInfoWrapper = styled.div`
  background-color: blue;
  width: 80vw;
  display: flex;
  justify-content: flex-end;
`;

export const FooterWrapper = styled.div`
  width: 100%;
  background-color: yellow;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-content: center;
`;

export const ContainerWrapper = styled.div`
  display: flex;
  height: 1100px;
`;

export const SideBarWrapper = styled.div`
  background-color: cyan;
  width: 20vw;
  text-align: center;

  li {
    margin: 80px 0px 0px 10px;
  }
  a {
    color: black;
    text-decoration: none;
  }
`;

export const SideBarList = styled.ul`
  list-style: none;
  text-align: left;
  padding: 0;
  margin: 0;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: start;
  background-color: lightgrey;
  width: 80vw;
`;

export const MainTitle = styled.h1`
  font-size: 2.5em;
  text-align: center;
  width: 100%;
`;

export const WidgetWrapper = styled.div`
  margin: 2% 8% 2% 8%;
  background-color: red;
  width: 200px;
  height: 300px;

  p {
    margin: 10px 10px 10px 10px;
  }

  img {
    width: 200px;
    height: 200px;
  }
`;

export const SubMenuWrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: orange;

  li {
    margin: 0px 70px 0px 70px;
  }

  a {
    color: black;
    text-decoration: none;
  }
`;

export const SubMenuList = styled.ul`
  display: flex;
  list-style: none;
  text-align: left;
  margin: 15px 0px 15px 0px;
`;
