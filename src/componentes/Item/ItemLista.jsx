import Item from "./Item"
import "./ItemLista.css"


export default function ItemLista({ productos }) {
    return (
        <div className="listaDeProductos">
            {productos.map((producto) => <Item key={producto.id} item={producto} />)}
        </div>
    )
}