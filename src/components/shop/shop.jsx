import { useEffect, useState } from "react";
import axios from "axios";
import Full from "../fullimage/fullimage.jsx";
import "./shop.css";
export default function Shop() {

  const [products, setProducts] = useState([]);
  const [select,setselect]=useState(false);
  const [selectobj,setselectobj]=useState({});


  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=200&skip=0")
      .then((res) => setProducts(res.data.products.reverse()))
      .catch((err) => console.log(err))
  }, []);
  function handle(props){
    setselect(true);
    setselectobj(props);

  }

  return (<> 
     
    { 
      select ? (<Full val={selectobj} set={setselect}/>)
      :
      (<div className="shop-cont">
      {products.map((obj) => (
        <div className="p-card" key={obj.id} onClick={()=>handle(obj)}>
          <img src={obj.images[0]} alt={obj.title} />
          <h4>{obj.title}</h4>
          <h4>${obj.price}</h4>
        </div>
      ))}</div>)
    }
  </>);
}
