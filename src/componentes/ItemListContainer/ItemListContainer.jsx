import React, { useState, useEffect } from "react";
import ItemLista from "../Item/ItemLista";
import { getProd, getProdByCategoria, getProdById } from "../Mock/MockAsincro";

export default function ItemListContainer({ category, id }) {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    // Si se obtiene una categoría, obtenemos los productos por esa categoría
    if (category) {
      getProdByCategoria(category)
        .then((data) => {
          setProductos(data);
          setCargando(false);
        })
        .catch((error) => {
          console.error("Error fetching productos by categoria");
          setCargando(false);
        });//lo mismo si se obitiene id
    } else if(id){
      console.log("Entra aca?¿")
      getProdById(id)
      .then((data)=>{
        setProductos(data)
        setCargando(false)
      })
      .catch((error)=>{
        console.log("Error fetching productos by ID")
        setCargando(false)
      })
    }else {
      console.log("Mepa que entra aca siip")
      getProd()
        .then((data) => {
          setProductos(data);
          setCargando(false);
        })
        .catch((error) => {
          console.error("Error fetching todos los productos");
          setCargando(false);
        });
    }
  }, [category]);

  return (
    <div>
      {cargando ? (
        <h2>Cargando...🕔</h2>
      ) : (
        <ItemLista productos={productos} />
      )}
    </div>
  );
}
