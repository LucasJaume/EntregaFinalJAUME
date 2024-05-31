import { useEffect } from "react";
import { useState } from "react";
import { getProd, getProdByCategoria, getProdById } from "../componentes/Mock/MockAsincro";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

 export default function useProducto(categoria){
    const [productos, setProductos]=useState([])
    const [cargando, setCargando]=useState(true)

    useEffect(() => {
      setCargando(true); 
      const db = getFirestore()
      const prodCollection= collection(db, "productos")
      if (categoria) {
       const prodQuery= query(
        prodCollection, where("category", "==", categoria)
       )
       getDocs(prodQuery)
       .then((snapshot)=>{
        setProductos(
          snapshot.docs.map((doc)=>({
            id: doc.id,
            ...doc.data(),
          }))
        )
       })
       .finally(()=>setCargando(false))
      }else{
        getDocs(prodCollection)
        .then((snapshot)=>{
          setProductos(
            snapshot.docs.map((doc)=>({
              id:doc.id,
              ...doc.data()
            }))
          )
        }).finally(()=> setCargando(false))
      }
    }, [categoria]);
    
      return {productos, cargando}
 }