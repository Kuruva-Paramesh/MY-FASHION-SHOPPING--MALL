import { useEffect, useState } from "react";
import axios from "axios";
import "./shop.css";
export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=200&skip=0")
      .then((res) => setProducts(res.data.products.reverse()))
      .catch((err) => console.log(err))
  }, []);

  return (
    <div className="shop-cont">
      {products.map((obj) => (
        <div className="p-card" key={obj.id}>
          <img src={obj.images[0]} alt={obj.title} />
          <h4>{obj.title}</h4>
          <h4>${obj.price}</h4>
        </div>
      ))}
    </div>
  );
}
