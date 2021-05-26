import React from "react";
import { WidgetWrapper } from "../styles.js";

export default function Widget() {
  let image =
    "https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-picture-icon-png-image_695350.jpg";

  return (
    <WidgetWrapper>
      <img src={`${image}`} alt="Placeholder" />
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium.
      </p>
    </WidgetWrapper>
  );
}
