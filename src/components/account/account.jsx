import { useContext } from "react";
import Context from "../../store.jsx";
export default function Account(){
    const {us,regmail}=useContext(Context);
    return (
    <>
     <h1>CUSTOMER</h1>
    <h1>NAME :{us} </h1>
    <h1>EMAIL -ID :{regmail}</h1>
    </>
    );
}