import "./Item.css"
import Counter from "../ItemCount/ItemContador"

// estructura...
const Item = ({nombre, img, precio}) =>{

    const detalles = () =>{

        console.log("detalles")
    }

//  contador de productos..
    const prod = (quantity) =>{
        console.log(`se agregaron ${quantity} productos`)}
       
    
    return(

    <div className="row">
         <div class="col">
                <div class="card">
                    <h5 class="card-title">{nombre}</h5>
                        <div class="card-body">
                           <img src={img}  alt={nombre}/> 
                           <hr/>                           
                            <p class="card-text">precio: ${precio}</p>
                            <button onClick={detalles}>ver detalles</button>
                            <Counter initial={0} stock={5} onAdd={prod}/>       

                        </div>
                 </div>
             </div>
       </div>
        

    )
}

export default Item

