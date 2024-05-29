import { useContext } from "react";
import CarritoWidget from "../CarritoWidget/CarritoWidget";
import Categorias from "../Categorias/Categorias";
import CartContext from "../../contexts/CartContext/CartContext";
import "./NavBar.css";

function NavBar() {
  const { cart } = useContext(CartContext)

  return (
    <div className="Navbar">
      <Categorias />
      <div className={`${cart.length === 0 ? "esconder" : ""}`}>
        <CarritoWidget />
      </div>
    </div>
  );
}

export default NavBar;
