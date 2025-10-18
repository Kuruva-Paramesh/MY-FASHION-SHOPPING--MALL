import { useContext } from "react";
import Context from "../../store.jsx";
import "./acount.css";
export default function Account(){
    const {us,regmail,count,theme}=useContext(Context);
    return (
    <div className="account" style={{
            background: theme,
            color: theme === "black" ? "white" : "black"
          }}>

    <div className="h">CUSTOMER- DETAILS </div>
    <div className="h3">NAME :{us} </div>
    <div className="h3" >EMAIL -ID :{regmail}</div>
    <div className="h3">PASSWORD : *********</div>
    <div className="h3">PRODUCTS :<ul>{count.map((obj)=><li>{obj.title}</li> )}</ul></div>
    <div className="h3">SELECTED QUANITY :{count.length}</div>
    <div className="h3"> Add Address :</div><textarea/>
   </div>
    );
}