import { useState } from "react"

const Counter = ({initial, onAdd, stock}) =>{
    const [count, setCount] = useState(initial);

    const increment = () => {
        if(count < 5){
            setCount(count + 1);
        }else {
             alert("no se encuentran mas disponibles");
        }
    }
    
    const decrement = () => {
        if(count > initial){
            setCount(count - 1);
        }else{
            alert("elegir al menos un producto para agregar correctamente al carrito");
        }
    }

    return(
        <div>
            <p>camisa negra</p>
            <button onClick={increment} className="btn btn-secondary">+</button>
            <p>{count}</p>
            <button onClick={decrement} className="btn btn-secondary">-</button><br/><br/>
            <button className="btn btn-primary" onClick={()=> onAdd(count)}>agregar al carrito</button>

        </div>


    )
}

export default Counter;
