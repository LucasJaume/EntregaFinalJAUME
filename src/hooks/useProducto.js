import { useEffect } from "react";
import { useState } from "react";
import { getProdById } from "../componentes/Mock/MockAsincro";

 export default function useProducto(id){
    const [producto, setProducto]=useState([])
    const [cargando, setCargando]=useState(true)

    useEffect(()=>{
      getProdById(id).then((data)=>setProducto(data))
        .finally(()=>setCargando(false))
      },[])

      return {producto, cargando}
 }