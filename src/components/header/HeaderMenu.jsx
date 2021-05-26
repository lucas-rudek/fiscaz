import React from "react";
import { HeaderMenuWrapper } from "../styles.js";

export default function HeaderMenu() {
  let image =
    "https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-picture-icon-png-image_695350.jpg";

  return (
    <HeaderMenuWrapper>
      <img src={`${image}`} alt="Placeholder" />
      <p>MENU</p>
    </HeaderMenuWrapper>
  );
}
