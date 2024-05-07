import React from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail"; 

const ItemDetailWithId = () => {
  const { id } = useParams();
  return <ItemDetail id={id} />;
};

export default ItemDetailWithId;
