import { useState } from "react"
import NavBar from './componets/NavBar/NavBar';
import ItemsListContainer from "./componets/ItemsListContainer/ItemsListContainer";
import ItemDetailContainer from "./componets/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom"


const App = () => {
  

  return (
    <div className="App">

    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/category/:categoryId" element={<ItemsListContainer/>}/>
      <Route path="/List" element={<ItemsListContainer/>} />
      <Route path="/detail/:productId" element={<ItemDetailContainer/>} />    
    </Routes>
    
    </BrowserRouter>
    

    </div>

  )};


export default App;
