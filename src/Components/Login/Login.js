import "./Login.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accept, setAccept] = useState(false);
  const [emailError, setemailError] = useState("");

  const pass = document.getElementById("pass");
  const iconeye = document.getElementById("iconeye");

  function eye() {
    if ((password.length > 0 && pass.type === "password")) {
      pass.type = "text";
      iconeye.className = "fa-solid fa-eye-slash";
     
    } else if (password.length > 0 && pass.type === "text") {
      pass.type = "password";
      iconeye.className = "fa-solid fa-eye";
    }
  }

  async function Submit(e) {
    let flag = true;
    e.preventDefault();
    setAccept(true);
    if (password.length < 8) flag = false;
    else flag = true;

    try {
      if (flag) {
        let res = await axios.post("http://127.0.0.1:8000/api/login", {
          email: email,
          password: password,
        });
        if (res.status === 200) {
          window.localStorage.setItem("email", email);
          window.location.pathname = "/";
        }
      }
    } catch (err) {
      setemailError(err.response.status);
    }
  }

  return (
    <div className="login">
      <div className="wrapper">
        <form onSubmit={Submit}>
          <h1>Log in</h1>
          <div className="box">
            <input
              type="text"
              placeholder="Username"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <i className="fa-solid fa-user" id="icon"></i>
            {accept && emailError === 422 && (
              <p className="error">Username is not Found</p>
            )}
          </div>

          <div className="box">
            <input
              type="password"
              id="pass"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              maxLength={20}
            />
            <i
              className="fa-solid fa-eye"
              id="iconeye"
              onClick={eye}
              style={{ cursor: "pointer" }}
            ></i>
            {password.length < 8 && accept && (
              <p className="error">Password must be more than 8 Char</p>
            )}
          </div>
          <div className="remember-forget">
            <label className="RememberMe">
              <input type="checkbox" /> Remember me
            </label>
          </div>
          <button type="submit" id="button">
            Login
          </button>
          <div className="Link-to-Register">
            <p>
              Don't have an account ?
              <Link to={"../Register/Register.js"} className="links"> Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
