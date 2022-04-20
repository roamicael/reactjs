import { useContext } from "react";
import CartContext from "../CartContext/CartContext";

const CartWidget = () =>{
    
    const { getQuantity } = useContext(CartContext)
    
    return(
        <div>
        <img type="button" src={"./images/carrito.png"} className="cart" alt="carrito" />
        {getQuantity ()}
        
        </div>
    )
}

export default CartWidget;