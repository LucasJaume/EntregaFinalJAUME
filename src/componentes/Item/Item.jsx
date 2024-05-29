import useContador from "../../hooks/useContador";
import Contador from "../Contador/Contador";
import { Link } from "react-router-dom";

export default function Item({ item }) {



  return (

    <div className="itemContainer">
      <div className="imgContainer">
        <img src={item.image} alt={item.title} />
      </div>
      <Link to={`/item/${item.id}`}>
        <h3 className="itemTitulo">{item.title}</h3>
      </Link>
      <p className="itemDescripcion">{item.description}</p>
      <p className="itemPrecio">${item.price}</p>
    </div>

  );
}
