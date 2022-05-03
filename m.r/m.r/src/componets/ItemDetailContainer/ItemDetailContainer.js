import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProductsById } from "../../StockProducts"
import ItemDetail from "../ItemDetal/ItemDetail"
import { getDoc, doc } from "firebase/firestore"
import { firestoreDb } from "../service/firebase"



const ItemDetailContainer = () =>{

   const [Products, setProduct] = useState()
   const [loading, setLoading] = useState(false)

  const { productId } = useParams()

   useEffect(() =>{
      // getProductsById(productId).then(item =>{
      //     setProduct(item)
      // }).catch(Error =>{
      //     console.log(Error)
      // }).finally(() =>{
      //     setLoading(false) 
      // })
      
      getDoc(doc(firestoreDb, "productos", productId)).then(response =>{
          console.log(response)
          const productos = { id: response.id, ...response.data() }
          setProduct(productos)
      })


       return (()=>{
       setProduct()

       })
},[productId])

   return (
       <div className="ItemDitalContainer">
           {
               loading ?
                  <h1>cargando...</h1>:
                Products ?
                 <ItemDetail {...Products}/>:
                   <h1>el producto no existe</h1>
            }
            

    
    
       </div>

   )

}

export default ItemDetailContainer 