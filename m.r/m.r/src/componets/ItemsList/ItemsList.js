import Item from "../Item/Item"

const ItemsList = ({productos}) => {
    return(
        <div className="ListGroup">
        
            {productos.map(prod => <Item key={prod.id} {...prod} />)}
        </div>

    )
}

export default ItemsList