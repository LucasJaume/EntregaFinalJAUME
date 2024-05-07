import "./Contador.css"

export default function Contador({sumar, restar, cantidad, stock}){
    return(
        <div className="contadorContainer">
            <button onClick={restar} className="btnRestar" disabled={cantidad<=0}>-</button>
            <span>{cantidad}</span>
            <button onClick={sumar} disabled={cantidad>=stock} className="btnSumar">+</button>
        </div>
    )
}