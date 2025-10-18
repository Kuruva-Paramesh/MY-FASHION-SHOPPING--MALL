import { useState } from "react";
import Header from "./components/head/head.jsx";
import "./App.css";
import Context from "./store.jsx";
import Nav from "./components/nav/nav.jsx";
import Body from "./components/body/body.jsx";
import Foot from "./components/foot/foot.jsx";
import { BrowserRouter } from "react-router-dom";
import Rout from "./components/router/router.jsx";

function Register({ onBack, em, ps, usr }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  function handleRegister() {
    if (username.trim().length < 5) {
      alert("Please enter a username with at least 5 letters");
    } else if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address");
    } else if (pass.length < 5) {
      alert("Password must be at least 5 characters long");
    } else if (pass !== confirmPass) {
      alert("Passwords do not match!");
    } else {
      alert("Registration successful ✅");
      em(email);
      ps(pass);
      usr(username);
      onBack(); // Go back to login
    }
  }

  return (
    <div className="register">
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPass(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        onChange={(e) => setConfirmPass(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button><br />
      <u onClick={onBack} style={{ cursor: "pointer" }}>
        Go back to Login
      </u>
    </div>
  );
}

export default function App() {
  const [isRegister, setIsRegister] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  // Login & Registration Data
  const [emailLogin, setEmailLogin] = useState("");
  const [passLogin, setPassLogin] = useState("");
  const [regMail, setRegMail] = useState("");
  const [regPass, setRegPass] = useState("");
  const [user, setUser] = useState("");

  // Context values
  const [theme, setTheme] = useState("white");
  const [count, setCount] = useState([]);

  function handleLogin() {
    if (emailLogin !== regMail || passLogin !== regPass) {
      alert("Incorrect email or password. Please register first.");
    } else {
      setIsLogin(true);
      alert(`Welcome ${user}! 👋`);
    }
  }

  if (isLogin) {
    return (
      <Context.Provider
        value={{
          select1: theme,
          setselected: setTheme,
          regmail: regMail,
          us: user,
          count,
          setcount: setCount,
        }}
      >
        <div
          className="tol"
          style={{
            background: theme,
            color: theme === "black" ? "white" : "black",
            width: "100%",
          }}
        >
          <BrowserRouter>
            <Header />
            <Nav />
            <Rout />
            <Foot />
          </BrowserRouter>
        </div>
      </Context.Provider>
    );
  }

  return (
    <div className="all">
      <div className="login">
        {isRegister ? (
          <Register
            onBack={() => setIsRegister(false)}
            em={setRegMail}
            ps={setRegPass}
            usr={setUser}
          />
        ) : (
          <>
            <h2>Login</h2>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmailLogin(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassLogin(e.target.value)}
            />
            <br />
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <br />
            <button onClick={handleLogin}>Login</button>
            <br />
            <b>
              Don’t have an account?{" "}
              <u onClick={() => setIsRegister(true)} style={{ cursor: "pointer" }}>
                Register
              </u>
            </b>
          </>
        )}
      </div>
    </div>
  );
}
