import { useState } from "react"

const Counter = ({initial, onAdd}) =>{
    const [count, setCount] = useState({title:"producto", count: 0});

    const increment = () => {
         setCount({...count, count:count.count + 1})
    }
    const decrement = () => {
        setCount({...count, count:count.count - 1})
    }

    console.log(count);

    return(
        <div>
            <p>camisa negra</p>
            <button onClick={increment} className="btn btn-secondary">+</button>
            <p>{count.count}</p>
            <button onClick={decrement} className="btn btn-secondary">-</button><br/><br/>
            <button className="btn btn-primary" onClick={()=> onAdd(count.count)}>agregar al carrito</button>

        </div>


    )
}

export default Counter;