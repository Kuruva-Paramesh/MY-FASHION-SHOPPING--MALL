import {useEffect,useState} from "react";
import axios from "axios";
import Context from "../../store.jsx";
import {useContext} from "react";
import {Link} from "react-router-dom";
import "./nav.css";
import Rout from "../router/router.jsx" 
 export default function Nav(){
     const[Dt,setdt]=useState([]);
     const{select1,setselected}=useContext(Context);
     useEffect(()=>{
        axios
    .get('https://fakestoreapi.com/products/categories')
    .then((data1)=>{setdt(data1.data)})
    .catch((err)=> {console.log(err)})
   },[]);
   function handle(o){
   setselected(o.target.value);

   }
    return(
    <div className="nav">
    <select onChange={handle} value={select1}>
        <option value="">Select Product</option>
        {
            Dt.map((val,i)=>(
        <option value={val} key={i}>{val}</option>))
        }
    </select>
    <button> <Link to="/"  className="h1">Home</Link></button>
    <button> <Link to="/shop" className="h1" >Shop</Link></button>
    <button> <Link to="/account" className="h1" >Acount</Link></button>
    <button> <Link to="/contact"  className="h1">Contact</Link></button>
    <button> <Link to="/bill" className="h1" >Bill</Link></button>
</div>);

}