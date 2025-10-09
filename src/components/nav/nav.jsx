import {useEffect,useState} from "react";
import axios from "axios";
import Context from "../../store.jsx";
import {useContext} from "react";
import "./nav.css";
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
    <button>Home</button>
    <button>Shop</button>
    <button>Acount</button>
    <button>Contact</button>
    <button>Bill</button>
</div>);

}