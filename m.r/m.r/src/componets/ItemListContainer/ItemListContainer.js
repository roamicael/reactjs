import { useState, useEffect} from "react"
import { getCategory, getProducts } from "../../StockProducts"
import ItemsList from "../ItemsList/ItemsList"
import { useParams } from "react-router-dom"
import { firestoreDb } from "../service/firebase"
import { getDocs, collection,query, where } from "firebase/firestore"

const ItemsListContainer = (props) =>{

    const [productos, setProducts] = useState([]) 

    const { categoryId } = useParams()
    

    useEffect(() =>{


     // getProducts(categoryId) .then(productos =>{
     //   setProducts(productos)
     // }) .catch(error => {
     //       console.log(error)
      //  }) 

      const collectionRef = categoryId
      ? query(collection (firestoreDb, "productos"), where("category", "==", categoryId))
      : collection (firestoreDb, "productos")

     getDocs(collectionRef).then(response =>{
         console.log(response)
         const productos = response.docs.map(doc =>{
             return { id: doc.id, ...doc.data() }
         })

         setProducts(productos)

         if(productos.length === 0){

            return <h1>assdasdasdsa</h1>

         }


     })

    },[categoryId])

    const handleClick = () => {
        console.log("hice click")
    }


    return(
        <div  onClick={handleClick}>
            <h1>{props.greeting}</h1>
           <ItemsList productos={productos} />
        </div>   
    )

}

export default ItemsListContainer