import { useState, useEffect } from "react";
import CartContext from "./CartContext";

export default function CartProvider({ children }) {
    const [cart, setCart] = useState(
        localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
    );

    const addToCart = (producto, cantidad) => {
        const itemEnCarrito = cart.find((item) => item.producto.id === producto.id);

        if (itemEnCarrito) {
            const actualizarCarrito = cart.map((item) => {
                if (item.producto.id === producto.id) {
                    return { producto, cantidad: item.cantidad + cantidad };
                }
                return item;
            });
            setCart(actualizarCarrito);
        } else {
            setCart([...cart, { producto, cantidad }]);
        }
    };

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    const removeFromCart = (prodId, cantidad) => {
        const itemEnCarrito = cart.find((item) => item.producto.id === prodId);
        if (itemEnCarrito) {
            const actualizarCarrito = cart.map((item) => {
                if (item.producto.id === prodId) {
                    return { producto: item.producto, cantidad: item.cantidad - cantidad };
                }
                return item;
            });
            const carritoFiltrado = actualizarCarrito.filter((item) => item.cantidad > 0);
            setCart(carritoFiltrado);
        }
    };

    const clearCart = () => {
        setCart([]);
    };

    const cartTotal = cart
        .reduce((acc, item) => {
            return acc + item.producto.price * item.cantidad;
        }, 0)
        .toFixed(2);


    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, cartTotal }}>
            {children}
        </CartContext.Provider>
    );
}
