import "./fullimage.css";
import axios from "axios";
import { useContext } from "react";
import Context from "../../store.jsx";
import {useEffect,useState} from "react";
export default function Fullimage({val , set}){
    const [obj,setobj]=useState(val)
    const [cat, setCategory] = useState([]);
    const{count,setCount}=useContext(Context);
    const{theme}=useContext(Context);
     useEffect(() => {
      axios
    .get(`https://dummyjson.com/products/category/${obj.category}`)
    .then((res) => setCategory(res.data.products))
    .catch((err) => console.log(err));
}, [obj.category]);

    return(<>
    <div>
    <div className="fullimg" style={{
            background: theme,
            color: theme === "black" ? "white" : "black"
          }}   >
        <div className="cardimg">
        <h1>{obj.title}</h1>
        <img src={obj.images[0]}/>
        </div>
        <div className="fulldata">
        <h3>{obj.title}</h3>
        <h3>{obj.price}</h3><br></br>
        <button onClick={()=>setCount([...count,obj])}  style={{
            background:theme,
            color: theme === "black" ? "white" : "black"
          }}> add to cart</button>
        <button onClick={()=>set(false)}  style={{
            background:theme,
            color: theme === "black" ? "white" : "black"
          }}>Go TO Back</button>
        </div>
        </div>
        
     <div className="h11">{val.category}</div>
     <div className="container"    style={{
            background:theme,
            color: theme === "black" ? "white" : "black"
          }}>
        {
        cat.map((o)=> 
       
        <div className="ful" onClick={()=>setobj(o)} style={{
            background: theme,
            color: theme === "black" ? "white" : "black"
          }}>
        <img src={o.images[0]}/>
        <h4>{o.title}</h4>
        <h4>{o.price}</h4>
        </div>
        )
    }
    </div>
   </div>  </>) }