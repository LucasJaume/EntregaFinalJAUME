import CarritoWidget from "../CarritoWidget";
import Categorias from "../Categorias";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="Navbar">
      <Categorias />
      <CarritoWidget />
    </div>
  );
}

export default NavBar;
