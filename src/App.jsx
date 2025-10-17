import { useState } from "react";
import Header from "./components/head/head.jsx";
import "./App.css";
import Context from "./store.jsx";
import  Nav from "./components/nav/nav.jsx";
import Body from "./components/body/body.jsx";
import Foot from "./components/foot/foot.jsx";
import { BrowserRouter } from "react-router-dom";
import Rout from "./components/router/router.jsx";

function Register({ onBack , em ,ps,usr}) {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [confirmpass, setconfirmpass] = useState("");
  function Handle(){
       if(username.length<5)
       {
        alert("Please enter more than 5 letters")
       }
       else if(!email.includes("@"))
       {
        alert("Please enter correct E-mail..");
       }
       else if(pass===confirmpass)
       {
        alert("Regristration succesfully..")
        em(email);
        ps(pass);
        usr(username);
         onBack();
       }
       else
        {
        alert("please check your confirm password");
       }

   

        }
  return (
    <div className="register">
      <h2>Register</h2>
      <input type="text" placeholder="Username" onChange={(e)=>setusername(e.target.value)}/>
      <input type="email" placeholder="Email" onChange={(e)=>setemail(e.target.value)}/>
      <input type="password" placeholder="Password" onChange={(e)=>setpass(e.target.value)} />
      <input type="password" placeholder="Confirm Password" onChange={(e)=>setconfirmpass(e.target.value)}/>
      <button onClick={Handle}>Register</button><br />
    </div>
  );
}

export default function App() {
  const [isRegister, setIsRegister] = useState(false);
  const [islogin, setIslogin] = useState(false);
  const [emaillog, setemaillog] = useState("reg");
  const [passlog, setpasslog] = useState("log");
  const [regmail,setregmail]=useState("email");
  const [regpass,setregpass]=useState("pass");
  const[select1,setselected]=useState("white");
  const[us,setus]=useState("us");
  const [count,setcount]=useState([]);




   function Handlelogin()
       {
      if(regmail!==emaillog)
      {
      alert("Please register..");
      }
      else if(regpass!==passlog) {
        alert("Password not matched..");
      }
      else{
        setIslogin(true)
      }


       }
       if(islogin){
        return (  <Context.Provider value={{select1 , setselected,regmail,us ,count,setcount}}>
          <div className="tol"  style={{background:select1,color: select1 === "black" ? "white" : "black",width:"100%"}}>
        <BrowserRouter>
        <Header/>
        <Nav/>
        <Rout/>
        <Foot/>
        </BrowserRouter>
        </div>
        </Context.Provider>);
        
       }

  return (
    <div className="all">

    <div className="login">
      {isRegister ? (
        <Register onBack={() => setIsRegister(false) } em={setregmail} ps={setregpass} usr={setus}/>
      ) : (
        <>
          <h2>Login</h2>
          <input type="email" placeholder="Email" onChange={(o)=>setemaillog(o.target.value) } />
          <input type="password" placeholder="Password" onChange={(o)=>setpasslog(o.target.value)} /><br />
          <input type="checkbox"/> Read Me<br/>
          <button onClick={Handlelogin}>Login</button><br />
          <b>Don't have an account ?
          <u onClick={() => setIsRegister(true)}>Register</u></b>
        </>
      )}
    </div>


    </div>
  );
}
