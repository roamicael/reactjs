import logo from './logo.svg';
import './App.css';
import NavBar from './componets/NavBar/NavBar';
import ItemsListContainer from './componets/ItemsListContainer/ItemsListContainer';

function App() {
  return (
    <div className="App">

      <NavBar/>

      <ItemsListContainer greeting="holaa coders" />  

    </div>

  );
}

export default App;
