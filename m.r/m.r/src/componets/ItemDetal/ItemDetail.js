import {  Link } from "react-router-dom"
import Counter from "../ItemCount/ItemContador"
import { useContext, useState } from "react"
import CartContext from "../CartContext/CartContext"


 const ItemDetail = ({nombre, img, precio, id, descripcion}) =>{


 const {addItem, isIntCart } = useContext(CartContext)


 const handleClick = (counter) =>{

   const productObj = {
     id,nombre,precio
   }

   addItem({...productObj, quantity: counter})


 }
 


    
  return(
  <div className="card mb-3 max-width: 540px;">
   <div className="row g-0">
    <div className="col-md-4">
      <img src={img}  alt={nombre} className="img-fluid rounded-start"/>
     {isIntCart(id) ? <Link to="/cart">ir al carrito</Link> : <Counter onAdd={handleClick}/> }
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title bg-success p-2 text-dark bg-opacity-25">
          {nombre}
          </h5><br/>
        <h5>Detalles:</h5>
        <p className="card-text font-monospace">
          {descripcion}
          </p>
        <h6 className="card-text">
          <small class="text-muted">
            <strong>
               P/C : ${precio}
               <p className="text-success">6 cuotas sin interes</p>
             </strong>
          </small>
        </h6>
        <br/>
        <button className="btn btn-primary">finalizar comprar</button>
        </div>
    </div>
  </div>
</div>

  
      

  )
  }

export default ItemDetail