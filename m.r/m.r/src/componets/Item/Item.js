import { Link } from "react-router-dom"
import "./Item.css"

//  contador de productos..
        const Item = ({nombre, img, precio, id}) =>{

        
    
    return(

    <div className="row">
         <div className="col" >
                <div className="card" >
                    <h5 className="card-title bg-success p-2 text-dark bg-opacity-25">{nombre}</h5>
                        <div className="card-body">
                           <img src={img}  alt={nombre}/> 
                                                
                            <p className="card-text" ><strong>Precio:   ${precio}</strong></p>                       
                                  
                        </div>
                        <footer>
                            <Link to={`/Detail/${id}`} type="button" className="btn btn-outline-success">ver detalle</Link>
                        </footer>
                 </div>
             </div>
       </div>
        

    )
    }
export default Item

