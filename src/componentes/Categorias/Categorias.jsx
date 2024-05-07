import { NavLink } from "react-router-dom";
import "./Categorias.css";


function Categorias() {
  return (
    <ul className="categorias">
      <li>
        <NavLink className={({isActive})=> (isActive ? "linkActivo" : "")} to="/">inicio</NavLink>
      </li>
      <li>
        <NavLink className={({isActive})=> (isActive ? "linkActivo" : "")} to="/Bicicletas">Bicicletas</NavLink>
      </li>
      <li>
        <NavLink className={({isActive})=> (isActive ? "linkActivo" : "")} to="/Skates" >Skates</NavLink>
      </li>
      <li>
        <NavLink className={({isActive})=> (isActive ? "linkActivo" : "")} to="/MonoPatines">MonoPatines</NavLink>
      </li>
    </ul>
  );
}

export default Categorias;
