import "./Contador.css"

export default function Contador({sumar, restar, cantidad, stock}){
    console.log("Antes o depsuesd e esto??")
    return(
        <div className="contadorContainer">
            <button onClick={restar} className="btnRestar" disabled={cantidad<=0}>-</button>
            <span>{cantidad}</span>
            <button onClick={sumar} disabled={cantidad>=stock} className="btnSumar">+</button>
        </div>
    )
}