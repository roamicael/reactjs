import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import { useState ,useEffect } from "react";
import { getCategory } from "../../StockProducts";
import { firestoreDb } from "../service/firebase";
import { getDocs, collection, doc } from "firebase/firestore";

const NavBar = () =>{

  const [categories, setCategory] = useState([])

  useEffect(() =>{
    //getCategory().then(categories =>{
    //  setCategory(categories);
    //})

    //firebase

    getDocs(collection(firestoreDb, "categories")).then(response =>{
      const categoria = response.docs.map(doc =>{
        return { id: doc.id, ...doc.data() }
      })

      setCategory(categoria)

    })

  })



    return( 

      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <Link to="/List" className="fs-4">M.R</Link>
          </a>
        <div className="btn">
          <ul className="nav nav-pills">
          <Link to="/List" className="nav-item nav-link"><stron>INICIO</stron></Link>

          {categories.map(cat => <Link key={cat.id} to={`/category/${cat.id}`}  className="nav-item nav-link">{cat.title}</Link>)}
          
            <CartWidget/>
          </ul>
         </div> 
        </header>
      
          
      </div>
      
      
    );

}

export default NavBar;
