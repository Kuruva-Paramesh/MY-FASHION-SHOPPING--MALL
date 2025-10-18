import Context from "../../store.jsx";
import {useContext} from "react";
import {Link} from "react-router-dom";
import "./nav.css";
import Rout from "../router/router.jsx" 
 export default function Nav(){
     const {setTheme,theme}=useContext(Context);
    function handle(e)
    {
        setTheme(e.target.value);
    }
     return(
    <div className="nav" style={{
            background: "black",
            color: theme === "black" ? "white" : "black"
          }}>
    <select  onChange={handle} value={theme}>
        <option value="">Select-Mode</option>
        <option value="lightgray">Dark-mode</option>
        <option value="white">Bright-mode</option>


     
    </select>
    <button> <Link to="/"  className="h1">Home</Link></button>
    <button> <Link to="/shop" className="h1" >Shop</Link></button>
    <button> <Link to="/account" className="h1" >Acount</Link></button>
    <button> <Link to="/contact"  className="h1">Contact</Link></button>
    <button> <Link to="/bill" className="h1" >Order</Link></button>
</div>);

}