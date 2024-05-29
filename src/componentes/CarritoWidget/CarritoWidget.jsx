import { useContext } from "react";
import IconoCarrito from "../IconoCarrito/IconoCarrito";
import CartContext from "../../contexts/CartContext/CartContext";
import { Link } from "react-router-dom";

function CarritoWidget() {
  const { cart } = useContext(CartContext)

  const cantidad = cart.reduce((acc, item) => acc + item.cantidad, 0)

  return (
    <Link to={"/carrito"}>
      <div>
        <IconoCarrito ancho={50} largo={50} />
        <span id="numCarrito">{cantidad}</span>
      </div>
    </Link>
  );
}

export default CarritoWidget;
