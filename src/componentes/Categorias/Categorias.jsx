import { NavLink } from "react-router-dom";
import "./Categorias.css";

const MIS_RUTAS = [{
  path: "/categoria/bicicletas",
  label: "Bicicletas"
},
{
  path: "/categoria/skates",
  label: "Skates"
},
{
  path: "/categoria/monopatines",
  label: "Monopatines"
},
]


function Categorias() {
  return (
    <nav>
      <ul className="categorias">
        {MIS_RUTAS.map((ruta) => (
          <li key={ruta.path}>
            <NavLink className={({ isActive }) => (isActive ? "linkActivo" : "")} to={ruta.path}>
              {ruta.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )



}

export default Categorias;
