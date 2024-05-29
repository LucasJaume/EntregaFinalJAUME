import { useParams } from "react-router-dom";
import useProductsById from "../../hooks/useProductsById";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
    const { id } = useParams()
    const { producto, cargando } = useProductsById(id)

    if (cargando) {
        return <h2>cargando...⌛</h2>
    }

    console.log(producto)
    return (
        <div>
            <ItemDetail item={producto} />
        </div>
    )
}
