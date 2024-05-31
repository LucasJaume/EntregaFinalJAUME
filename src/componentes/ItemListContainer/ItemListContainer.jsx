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
}
