import { useState } from "react"
import "./ItemContador.css"

const Counter = ({initial, onAdd, stock}) =>{
    const [count, setCount] = useState(initial);

    const increment = () => {
         if(count < stock){
             setCount(count + 1)
         }else{
             alert("no hay mas disponibles")
         }
    }
    const decrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }      
    }

    return(
        <div className="body">
            <p>camisa negra</p>
            <button onClick={increment} className="btn btn-secondary">+</button>
            <p>{count}</p>
            <button onClick={decrement} className="btn btn-secondary">-</button><br/><br/>
            <button className="btn btn-primary" onClick={()=> onAdd(count)}>agregar al carrito</button>

        </div>


    )
}

export default Counter;