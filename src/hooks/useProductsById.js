import { useEffect, useState } from "react";
import { getProdById } from "../componentes/Mock/MockAsincro";

export default function useProductsById(id){
    const [producto, setProducto]= useState(null)
    const [cargando,setCargando]= useState(true)
    useEffect(()=>{
        if(id){
            getProdById(id)
            .then((producto)=>{
                setProducto(producto)
            })
            .finally(()=>setCargando(false))
        }
    },[id])

    return {producto, cargando}
}