import React from "react";
import { HeaderWrapper } from "../styles.js";
import HeaderInfo from "./HeaderInfo.jsx";
import HeaderMenu from "./HeaderMenu.jsx";

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderMenu />
      <HeaderInfo />
    </HeaderWrapper>
  );
}
