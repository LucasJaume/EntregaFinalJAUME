import { useState } from "react";

export default function(){
    const [buyer, setBuyer]=useState({
        nombre:"",
        apellido:"",
        email:"",
    })

    const handleInputChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value,
        });
    };

    return{buyer, handleInputChange}
}