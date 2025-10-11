import { useContext } from "react";
import Context from "../../store.jsx";
import "./acount.css";
export default function Account(){
    const {us,regmail,count}=useContext(Context);
    return (
    <div className="account">

    <div className="h">CUSTOMER</div>
    <h3>NAME :{us} </h3>
    <h3>EMAIL -ID :{regmail}</h3>
    <h3>PASSWORD : *********</h3>
    <h3>PRODUCTS :<ul>{count.map((obj)=><li>{obj.title}</li> )}</ul></h3>
    <h3>QUANITY :{count.length}</h3>
    <h3>EMAIL-CHANGES :</h3>
    <h3>NAME-CHANGES :</h3>
     <h3>PASSWORD-CHANGES :</h3>

   </div>
    );
}