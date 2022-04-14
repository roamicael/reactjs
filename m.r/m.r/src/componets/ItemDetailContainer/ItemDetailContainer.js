import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProductsById } from "../../StockProducts"
import ItemDetail from "../ItemDetal/ItemDetail"



const ItemDetailContainer = () =>{

   const [Products, setProduct] = useState()
   const [loading, setLoading] = useState(true)

  const { productId } = useParams()

   useEffect(() =>{
       getProductsById(productId).then(item =>{
           setProduct(item)
       }).catch(Error =>{
           console.log(Error)
       }).finally(() =>{
           setLoading(false) 
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