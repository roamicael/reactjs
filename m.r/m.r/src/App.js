import react from "react"
import './App.css';
import NavBar from './componets/NavBar/NavBar';
import Counter from './componets/ItemCount/ItemContador';

const App = () => {

const handleOnAdd = (quantity) =>{
  console.log(`se agregaron ${quantity} productos`)
}

  return (
    <div className="App">
      <NavBar/>

      <Counter initial={0} onAdd={handleOnAdd} stock={5}/>

    </div>

  );
}

export default App;
