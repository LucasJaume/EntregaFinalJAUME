import { useEffect } from "react";
import { useState } from "react";
import { getProd, getProdByCategoria, getProdById } from "../componentes/Mock/MockAsincro";

 export default function useProducto(categoria){
    const [productos, setProductos]=useState([])
    const [cargando, setCargando]=useState(true)

    // useEffect(()=>{
    //   setCargando(true)
    //   if(categoria){
    //     getProdByCategoria(categoria)
    //   .then((data)=>setProductos(data))
    //   .finally(()=>setCargando(false))
    //   }else{
    //     getProd()
    //     .then((data)=>setProductos(data))
    //     .finally(()=>setCargando(false))
    //   }
    // },[categoria])


    useEffect(() => {
      setCargando(true); // Asegúrate de restablecer el estado de cargando
      if (categoria) {
        getProdByCategoria(categoria)
          .then((data) => {
            setProductos(data);
          })
          .finally(() => setCargando(false));
      } else {
        getProd()
          .then((data) => {
            setProductos(data);
          })
          .finally(() => setCargando(false));
      }
    }, [categoria]);
    
      return {productos, cargando}
 }