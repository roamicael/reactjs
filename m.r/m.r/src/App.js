import NavBar from './componets/NavBar/NavBar';
import ItemListContainer from "./componets/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componets/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Form from "./componets/Form/Form";
import { CartContextProvider } from './componets/CartContext/CartContext';
import Cart from './componets/Cart/Cart';






const App = () => {
  
  

  return (
    <div className="App">  
  
    <CartContextProvider> 
   
    <BrowserRouter>
    <NavBar/>
    {/*<Form/>*/}

    <Routes>
      <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
      <Route path="/List" element={<ItemListContainer/>} />
      <Route path="/detail/:productId" element={<ItemDetailContainer/>} />   
      <Route path="/Form" element={<Form/>} /> 
      <Route path="/cart" element={<Cart/>} />
    </Routes>
    
    </BrowserRouter>
    </CartContextProvider>
    </div>

  )};


export default App;
