import { useContext } from "react"
import CartContext from "../CartContext/CartContext"
import ItemCart from "../ItemCart/ItemCart"
import { firestoreDb } from "../service/firebase"
import { addDoc, collection } from "firebase/firestore"
import { Link } from "react-router-dom"
 



const Cart = () =>{

    const { cart, clearCart, getQuantity, getTotal} = useContext(CartContext)

    const objOrder = {
      items: cart,
      buyer: {
        name: "Micael Roa",
        phone: "3471-598107",
        email: "roamicael22@gmail.com"
      },
     total: getTotal(),
     date : new Date()
      
    }

    const addDocToCollection = () =>{
      const collectionRef = collection(firestoreDb, "user")
      
      let objUser = {
        name: "Micael Roa",
        phone: "3471-598107",
        email: "roamicael22@gmail.com",
        date : new Date()
      }

      addDoc(collectionRef, objUser)
      .then(response =>{
        console.log(response.id)
      })

    }





    if (getQuantity() === 0 ) {
        return(
            <h5 >no hay productos agregados...</h5>
        )
        
    }

    
    return(
      <>
        <h1>Cart</h1><br/>
        
         {cart.map(prod => <ItemCart key={prod.id} {...prod} /> )}

         <span>Precio total: ${getTotal()}</span>         
         <span  type="button" onClick={() =>{clearCart()}} className="btn btn-danger">Limpiar Carrito!!</span>
         <Link to="/Form"><span type="button"  onClick={() =>{addDocToCollection()}} className="btn btn-success" >compar ahora!!</span></Link>

       
      </>
    )
}


export default Cart

