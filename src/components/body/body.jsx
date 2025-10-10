import "./body.css";
import axios from "axios";
import {useContext,useEffect,useState} from "react";
import Context from "../../store.jsx";
export default function Body(){
    const {select1}=useContext(Context);
    const[prod,setprod]=useState([]);
     useEffect(()=>{   if (!select1) return;
     axios.get(`https://fakestoreapi.com/products/category/${select1}`)
    .then((da)=>setprod(da.data))
    .catch((err)=> console.log(err))
    },[select1]);
   

    return (
    <div className="body">
        <div className="hbody">
         Welcome To My Fashion<br/> Shopping to All...
        </div>
        <div className="halfbody">
        {
            prod.map((val,count)=>(
                <div className="card">
                <img src={val.image}/>
                  <b>{val.title}</b>  <br/> 
                   <s><b>{ parseInt(val.price+count*100)}</b></s>
                   <b>&nbsp; &nbsp; &#8377;{parseInt(val.price*10)}</b>
                </div>
            )
                )
        }
        </div>

    </div>);
}