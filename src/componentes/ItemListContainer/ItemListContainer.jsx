import React, { useState, useEffect } from "react";
import ItemLista from "../Item/ItemLista";
import { getProd, getProdByCategoria, getProdById } from "../Mock/MockAsincro";
import { useParams } from "react-router-dom";
import useProducto from "../../hooks/useProducto";

export default function ItemListContainer() {
  const { nombreCategoria } = useParams()
  const { productos, cargando } = useProducto(nombreCategoria)

  if (cargando) return <h1>cargando...⌛</h1>;

  return (
    <div>
      <ItemLista productos={productos} />
    </div>
  )






  // const [productos, setProductos] = useState([]);
  // const [cargando, setCargando] = useState(true);

  // useEffect(() => {
  //   // Si se proporciona una categoría y un ID, prioriza el ID
  //   if (id) {
  //     getProdById(id)
  //       .then((data) => {
  //         setProductos([data]); 
  //         setCargando(false);
  //       })
  //       .catch((error) => {
  //         console.log("Error fetching producto by ID");
  //         setCargando(false);
  //       });
  //   } else if (category) {
  //     getProdByCategoria(category)
  //       .then((data) => {
  //         setProductos(data);
  //         setCargando(false);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching productos by categoria");
  //         setCargando(false);
  //       });
  //   } else {
  //     getProd()
  //       .then((data) => {
  //         setProductos(data);
  //         setCargando(false);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching todos los productos");
  //         setCargando(false);
  //       });
  //   }
  // }, [category, id]);

  // return (
  //   <div>
  //     {cargando ? (
  //       <h2>Cargando...🕔</h2>
  //     ) : (
  //       <ItemLista productos={productos} />
  //     )}
  //   </div>
  // );
}
