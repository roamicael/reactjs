import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () =>{

    return( 

      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <span className="fs-4">M.R</span>
          </a>
    
          <ul className="nav nav-pills">
            <li className="nav-item"><a href="#" className="nav-link">celulares</a></li>
            <li className="nav-item"><a href="#" className="nav-link">notebook</a></li>
            <li className="nav-item"><a href="#" className="nav-link">tablet</a></li>
            <CartWidget/>
          </ul>
        </header>
        <div>
          
        </div>
      </div>
      
      
    );

}

export default NavBar;
