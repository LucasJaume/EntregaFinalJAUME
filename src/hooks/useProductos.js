import { useEffect } from "react";
import { useState } from "react";
import { getProd } from "../componentes/Mock/MockAsincro";

 export default function useProductos(){
    const [productos, setProductos]=useState([])
    const [cargando, setCargando]=useState(true)

    useEffect(()=>{
        getProd().then((data)=>setProductos(data))
        .finally(()=>setCargando(false))
      },[])

      return {productos, cargando}
 }