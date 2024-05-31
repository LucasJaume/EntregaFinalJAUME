import { useContext } from "react";
import useContador from "../../hooks/useContador";
import './ItemDetail.css'
import Contador from "../Contador/Contador";
import CartContext from "../../contexts/CartContext/CartContext";

export default function ItemDetail({ item }) {
    const { cantidad, sumar, restar, reset } = useContador(0);
    const { addToCart } = useContext(CartContext)


    const agregarCarrito = () => {
        addToCart(item, cantidad)
        reset()
    };

    return (
        <div className="itemDetailContainer">
            <div className="imgDetailContainer">
                <img src={item.image} alt={item.title} />
            </div>
            <h3 className="itemDetailTitulo">{item.title}</h3>
            <p className="itemDetailDescripcion">{item.description}</p>
            <p className="itemDetailPrecio">${item.price}</p>
            <Contador sumar={sumar} restar={restar} cantidad={cantidad} stock={item.stock} />
            <div className="itemDetailBtn">
                <button
                    className="Boton"
                    onClick={agregarCarrito}
                    disabled={cantidad === 0}>
                    Agregar a carrito!
                </button>
            </div>
            <h4 className="cantidad">quedan {item.stock} productos en stock.</h4>
        </div>
    );
}
