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

      <Counter initial={0} onAdd={handleOnAdd} />

    </div>

  );
}

export default App;
