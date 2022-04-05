
import { useState, useEffect} from "react"
import { getProducts } from "../../StockProducts"
import ItemsList from "../ItemsList/ItemsList"

const ItemsListContainer = (props) =>{

    const [productos, setProducts] = useState([]) 

    useEffect(() =>{
      getProducts().then(productos =>{
        setProducts(productos)
    }).catch(error => {
        console.log(error)
    })
},[]) 


    return(
        <div>
           <ItemsList productos={productos} />
        </div>   
    )

}

export default ItemsListContainer