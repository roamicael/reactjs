import { useContext } from "react"
import CartContext from "../CartContext/CartContext"


const ItemCart = ({id, nombre, quantity, precio}) =>{

    const { remuveItem } = useContext(CartContext)

    return(
        <div>

            <li key={id} > <strong>{nombre} </strong>  ||  <strong>CANTIDAD:</strong> {quantity}  ||  <strong> PRECIO POR UNI:</strong> {precio}  || <strong>SUBTOTAL:</strong> {quantity * precio}  
            <button className="btn btn-danger" onClick={() => remuveItem(id) }>quitar</button> <br/></li>

        </div>

    )
}


export default ItemCart