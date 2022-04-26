import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../CartContext/CartContext";

const CartWidget = () =>{
    
    const { getQuantity } = useContext(CartContext)
    
    return(
        <div>
        <Link to={"/Cart"}> <img type="button" src={"./images/carrito.png"} className="cart" alt="carrito" /> </Link>
        {getQuantity ()}
        
        </div>
    )
}

export default CartWidget;