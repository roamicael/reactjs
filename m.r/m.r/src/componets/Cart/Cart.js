import { useContext } from "react"
import CartContext from "../CartContext/CartContext"




const Cart = () =>{

    const { cart, remuveItem } = useContext(CartContext)

    if (cart.length === 0 ) {
        return(
            <h2>no hay productos agregados</h2>
        )
        
    }

    
    return(
      <>
        <h1>Cart</h1><br/>
        
         {
          cart.map(prod => <li key={prod.id} > <strong>{prod.nombre} </strong>  ||  <strong>CANTIDAD:</strong> {prod.quantity}  ||  <strong> PRECIO POR UNI:</strong> {prod.precio}  || <strong>SUBTOTAL:</strong> {prod.quantity * prod.precio}  <button className="btn btn-danger" onClick={() => remuveItem(prod.id) }>quitar</button> <br/></li> )
         }
       
       
      </>
    )
}


export default Cart

