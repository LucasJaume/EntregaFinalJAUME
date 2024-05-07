import { useState } from "react";

export default function useContador(initialValue=0){
    const [cantidad, setCantidad]=useState(initialValue)

    const sumar=()=>{
        setCantidad(cantidad+1)
    }

    const restar=()=>{
        setCantidad(cantidad-1)
    }

    return {cantidad, sumar, restar}
}