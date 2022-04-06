import react from "react"
import NavBar from './componets/NavBar/NavBar';
import Counter from './componets/ItemCount/ItemContador';
import ItemsListContainer from "./componets/ItemsListContainer/ItemsListContainer";

const App = () => {

const handleOnAdd = (quantity) =>{
  console.log(`se agregaron ${quantity} productos`)}


  return (
    <div className="App">
     <NavBar/>
     <Counter initial={0} onAdd={handleOnAdd} stock={5}/>
     <ItemsListContainer/>

    </div>

  );
}

export default App;
