import "./Item.css"

const Item = ({nombre, img, precio}) =>{

    const detalles = () =>{

        console.log("detalles")
    }
    
    return(
        <div className="prod">
            <h3>{nombre}</h3>
            <img src={img} alt={nombre}></img>
            <p>precio: ${precio}</p>
            <button onClick={detalles}>ver detalles</button>

        </div>
    )
}

export default Item