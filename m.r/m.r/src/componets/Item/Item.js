import "./Item.css"

const Item = ({nombre, img}) =>{

    const detalles = () =>{

        console.log("detalles")
    }
    
    return(
        <div className="prod">
            <h3>{nombre}</h3>
            <img src={img} alt={nombre}></img>
            <button onClick={detalles}>ver detalles</button>

        </div>
    )
}

export default Item