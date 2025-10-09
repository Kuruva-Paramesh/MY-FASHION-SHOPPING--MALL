import "./head.css";
import cart from "../../assets/images/myfashioncart.jpg";
import logo from "../../assets/images/myfashion.webp";
function Header(){

return (<div className="header">
    <img src={logo} alt="logo"/>
    <input type="search" placeholder="🔍"/>
 <img src={cart} alt="Cart" />
</div>);




}
export default Header;