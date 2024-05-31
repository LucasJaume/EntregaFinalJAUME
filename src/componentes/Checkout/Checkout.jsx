import { useContext, useState } from "react";
import CartContext from "../../contexts/CartContext/CartContext";
import { addDoc, collection, getFirestore, updateDoc, doc } from "firebase/firestore";
import ItemCarrito from "../ItemCarrito/ItemCarrito";
import "./Checkout.css";
import useBuyer from "../../hooks/useBuyer";

export default function Checkout() {
    const { cart, clearCart, cartTotal } = useContext(CartContext);
    const { buyer, handleInputChange } = useBuyer();
    const [orderId, setOrderId] = useState(null);

    const enviar = async (e) => {
        e.preventDefault();
        const order = {
            buyer, cart, cartTotal,
        };

        const db = getFirestore();
        const orderCollection = collection(db, "orders");

        try {
            const docRef = await addDoc(orderCollection, order);
            alert(`Compra exitosa!`);
            setOrderId(docRef.id);

            await Promise.all(cart.map(async (item) => {
                const productRef = doc(db, "productos", item.producto.id);
                await updateDoc(productRef, {
                    stock: item.producto.stock - item.cantidad
                });
            }));

            clearCart();
        } catch (error) {
            console.error("Error: ", error);
        }
    };

    return (
        <div className="checkout">
            <div className="formCheckout">
                <form onSubmit={enviar}>
                    <label>Nombre</label>
                    <input type="text"
                        name="nombre"
                        value={buyer.nombre}
                        onChange={handleInputChange}
                    />
                    <label>Apellido</label>
                    <input type="text"
                        name="apellido"
                        value={buyer.apellido}
                        onChange={handleInputChange}
                    />
                    <label>Email</label>
                    <input type="email"
                        name="email"
                        value={buyer.email}
                        onChange={handleInputChange}
                    />
                    <button type="submit">Comprar</button>
                </form>
            </div>
            <div className="producto">
                {orderId ? (
                    <h3>Compra realizada. Su código de compra es: {orderId}. <br /> <br />
                        Vuelva a inicio si quiere seguir comprando!</h3>
                ) : (
                    cart.length === 0 ? (
                        <h3>No se encuentran productos</h3>
                    ) : (
                        cart.map((item) => (
                            <ItemCarrito key={item.producto.id} item={item} />
                        ))
                    )
                )}
            </div>
        </div>
    );
}
