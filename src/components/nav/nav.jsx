import axios from "axios";
import Context from "../../store.jsx";
import {useContext} from "react";
import {Link} from "react-router-dom";
import "./nav.css";
import Rout from "../router/router.jsx" 
 export default function Nav(){
     const {setselected}=useContext(Context);
    function handle(e)
    {
        setselected(e.target.value);
    }
     return(
    <div className="nav">
    <select >
        <option value="" onChange={handle}>Select-Mode</option>
        <option value="black">Dark-mode</option>
        <option value="white">Bright-mode</option>


     
    </select>
    <button> <Link to="/"  className="h1">Home</Link></button>
    <button> <Link to="/shop" className="h1" >Shop</Link></button>
    <button> <Link to="/account" className="h1" >Acount</Link></button>
    <button> <Link to="/contact"  className="h1">Contact</Link></button>
    <button> <Link to="/bill" className="h1" >Order</Link></button>
</div>);

}