import "./head.css";
import{useContext} from "react";
import Context from "../../store.jsx";
import logo from "../../assets/images/myfashion.webp";
function Header(){
    const{count}=useContext(Context);

return (
<div className="header">
    <img src={logo} alt="logo"/>
    <input type="search" placeholder="🔍"/>
    <div className="cart"><p>{count.length}</p></div>  
</div>);




}
export default Header;