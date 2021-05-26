import React from "react";
import { HeaderWrapper } from "../styles.js";
import HeaderInfo from "./HeaderInfo.jsx";

export default function Header() {
  return (
    <HeaderWrapper>
      <p>FISCAZ</p>
      <HeaderInfo />
    </HeaderWrapper>
  );
}
