import useContador from "../../hooks/useContador";
import Contador from "../Contador/Contador";

export default function Item({item}){
const {cantidad, sumar, restar}=useContador(0)

const agregarCarrito=(nombreDeItem, cantidadALlevar)=>{
    console.log("Nombre del item: "+nombreDeItem)
    console.log("Cantidad de item agregados: "+cantidadALlevar)
}

return(
    <div className="itemContainer">
        <div className="imgContainer"><img src={item.image} alt={item.title} /></div>
        <h3 className="itemTitulo">{item.title}</h3>
        <p className="itemDescripcion">{item.description}</p>
        <p className="itemPrecio">${item.price}</p>

        <div className="itemContador">
            <Contador
            stock={item.stock}
            restar={restar}
            sumar={sumar}
            cantidad={cantidad}
            />
        </div>
        <div className="itemBtn">
        <button className="Btn" onClick={agregarCarrito(item.title, cantidad)}>Agregar a carrito!</button>
        </div>
    </div>
)
}