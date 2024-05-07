import CarritoWidget from "../CarritoWidget/CarritoWidget";
import Categorias from "../Categorias/Categorias";

function NavBar() {
  return (
    <div className="Navbar">
      <Categorias />
      <CarritoWidget />
    </div>
  );
}

export default NavBar;
