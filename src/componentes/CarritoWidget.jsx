import { useState } from "react";
import IconoCarrito from "./IconoCarrito";

function CarritoWidget() {
  const [itemCarrito, setItemCarrito] = useState(0);

  return (
    <div>
      <IconoCarrito ancho={50} largo={50} />
      <span>{itemCarrito}</span>
    </div>
  );
}

export default CarritoWidget;
