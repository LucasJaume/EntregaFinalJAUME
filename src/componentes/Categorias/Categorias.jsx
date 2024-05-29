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
          <li key={MIS_RUTAS.path}>
            <NavLink className={({ isActive }) => (isActive ? "linkActivo" : "")} to={ruta.path}>
              {ruta.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )





  // return (
  //   <ul className="categorias">
  //     <li>
  //       <NavLink className={({isActive})=> (isActive ? "linkActivo" : "")} to="/">inicio</NavLink>
  //     </li>
  //     <li>
  //       <NavLink className={({isActive})=> (isActive ? "linkActivo" : "")} to="/Bicicletas">Bicicletas</NavLink>
  //     </li>
  //     <li>
  //       <NavLink className={({isActive})=> (isActive ? "linkActivo" : "")} to="/Skates" >Skates</NavLink>
  //     </li>
  //     <li>
  //       <NavLink className={({isActive})=> (isActive ? "linkActivo" : "")} to="/MonoPatines">MonoPatines</NavLink>
  //     </li>
  //   </ul>
  // );
}

export default Categorias;
