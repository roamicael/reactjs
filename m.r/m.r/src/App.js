import react from "react"
import NavBar from './componets/NavBar/NavBar';
import Counter from "./componets/ItemCount/ItemContador";
import ItemsListContainer from "./componets/ItemsListContainer/ItemsListContainer";

const App = () => {

  return (
    <div className="App">
     <NavBar/>
     <ItemsListContainer/>
    

    </div>

  );
}

export default App;
