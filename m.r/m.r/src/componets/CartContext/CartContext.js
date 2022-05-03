import { createContext, useState } from "react";

const CartContext = createContext()

export const  CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    console.log(cart)

    const addItem = (productoAdd) =>{
        setCart([...cart, productoAdd])
    }
// contador
    const getQuantity = () =>{
        let  count = 0
        cart.forEach(prod =>{
            count += prod.quantity
        } ) 
            return count
    }

    const isIntCart = (id) =>{
        return cart.some(prod => prod.id === id )
    }

// limpiar carrito
    const clearCart = () =>{
        setCart([])
    }
// eliminar producto del carrito    
    const remuveItem = (id) =>{
        const produc =cart.filter(prod => prod.id !== id)
        setCart(produc)
    }
// precio total    
    const getTotal = () =>{
        let total = 0
        cart.forEach(prod =>{
            total += prod.quantity * prod.precio
        }) 
        return total
    }


    return (
        <CartContext.Provider value={{
            cart,
            addItem,
            getQuantity,
            isIntCart,
           clearCart,
           remuveItem,
           getTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContext