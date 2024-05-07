import ItemLista from "../Item/ItemLista"
import useProductos from "../../hooks/useProductos"
import useProducto from "../../hooks/useProducto"


export default function ItemListContainer({ greeting }) {
  const {productos, cargando}=useProductos()
  const {producto, cargando: cargandoID}=useProducto(2)

  if(cargando) return <h1>Cargando 🕔</h1>
  
  console.log(producto, cargandoID)

  return (
    <div>
      <ItemLista productos={productos}/>
    </div>
  )
}


