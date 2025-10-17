import { Suspense, useEffect, useState } from "react";
import axios from "axios";
import Full from "../fullimage/fullimage.jsx";
import Context from "../../store.jsx";
import {useContext} from "react";
import "./shop.css";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [select, setSelect] = useState(false);
  const [selectObj, setSelectObj] = useState({});
  const {selsect1}=useContext(Context);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=200&skip=0")
      .then((res) => setProducts(res.data.products.reverse()))
      .catch((err) => console.log(err));
  }, []);

  function handle(obj) {
    setSelect(true);
    setSelectObj(obj);
  }

  const loading = <div style={{ textAlign: "center", marginTop: "50px" }}>Loading...</div>;

  return (
    <div style={{background:selsect1 ,color:selsect1==="black"?"white":"black"}}>
    <Suspense fallback={loading}>
      {select ? (
        <Full val={selectObj} set={setSelect} />
      ) : (
        <div className="shop-cont" style={{background:selsect1 ,color:selsect1==="black"?"white":"black"}}>
          {products.map((obj) => (
            <div className="p-card"style={{background:selsect1 ,color:selsect1==="black"?"white":"black"}} key={obj.id} onClick={() => handle(obj)}>
              <img src={obj.images[0]} alt={obj.title} />
              <h4>{obj.title}</h4>
              <h4>${obj.price}</h4>
            </div>
          ))}
        </div>
      )}
    </Suspense>
    </div>
  );
}
