import "./body.css";
import IM from "../../assets/images/body.jpg";
import {useContext} from "react";
import Context from "../../store.jsx";
export default function Body(){
    const {select1}=useContext(Context);
   

    return (
    <div className="body">

        <div className="hbody">
         Welcome To My Fashion<br/> Shopping to All...<br></br><br/>
         <h4>Click products  and add to cart.
</h4>
        </div>

        <div className="img1">
         <img src={IM} alt="loading..."/>
         </div>
         

       </div>);
}