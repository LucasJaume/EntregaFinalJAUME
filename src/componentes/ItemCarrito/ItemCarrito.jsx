// src/componentes/ItemCarrito/ItemCarrito.jsx
import { useContext, useState } from "react";
import "./ItemCarrito.css";
import CartContext from "../../contexts/CartContext/CartContext";

export default function ItemCarrito({ item }) {
    const { removeFromCart, addToCart } = useContext(CartContext);

    return (
        <div className="item-carrito">
            <img src={item.producto.image} alt={item.producto.title} className="item-carrito-imagen" />
            <div className="item-carrito-detalles">
                <p>{item.producto.title}</p>
                <p>Cantidad: {item.cantidad}</p>
                <p>Precio: ${item.producto.price}</p>
            </div>
            <div className="item-carrito-botones">
                <button onClick={() => removeFromCart(item.producto.id, 1)}>-</button>
                <button onClick={() => addToCart(item.producto, 1)}>+</button>
            </div>
        </div>
    );
}
