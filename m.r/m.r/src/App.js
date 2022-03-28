import logo from './logo.svg';
import './App.css';
import NavBar from './componets/NavBar/NavBar';
import itemsListContainer from './componets/itemsListContainer/itemsListContainer';

function App() {
  return (
    <div className="App">

      <NavBar/>

      <itemsListContainer greeting={"holaa coders"}/>  

    </div>

  );
}

export default App;
