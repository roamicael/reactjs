import { useState, useEffect} from "react"
import { getProducts } from "../../StockProducts"
import ItemsList from "../ItemsList/ItemsList"
import { useParams } from "react-router-dom"

const ItemsListContainer = (props) =>{

    const [productos, setProducts] = useState([]) 

    const { categoryId } = useParams()
    

    useEffect(() =>{
      getProducts(categoryId) .then(productos =>{
        setProducts(productos)
    }) .catch(error => {
        console.log(error)
    })
},[categoryId])

const handleClick = () => {
    console.log("hice click")
}


    return(
        <div onClick={handleClick}>
            <h1>{props.greeting}</h1>
           <ItemsList productos={productos} />
        </div>   
    )

}

export default ItemsListContainer