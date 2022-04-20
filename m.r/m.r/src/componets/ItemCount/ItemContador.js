import { useState } from "react"
import "./ItemContador.css"

const Counter = ({ onAdd}) =>{
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
            setCount(count - 1);  
    }

    return(
        <div className="body">
            <br/>
            <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" onClick={increment} className="btn btn-outline-success" ><strong>+</strong></a></li>
        <li><a href="#" className="btn btn-success">{count}</a></li>
        <li><a href="#"  onClick={decrement} className="btn btn-outline-success"><strong>-</strong></a></li>
      </ul>
      <button className="btn btn-primary" onClick={()=> onAdd(count)}>agregar al carrito</button>
        </div>


    )
}

export default Counter;