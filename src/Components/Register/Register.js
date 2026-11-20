import "./Register.css";
import "../../all.min.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordR, setPasswordR] = useState("");
  const [accept, setAccept] = useState(false);
  const [emailError, setemailError] = useState("");

  const pass = document.getElementById("pass");
  const iconeye = document.getElementById("iconeyeR");

  function eye() {
    /* تابع لاظهار واخفاء كلمة السر*/
    if (password.length > 0 && pass.type === "password") {
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
    if (name === "" || password.length < 8 || password !== passwordR)
      flag = false;
    else flag = true;

    try {
      if (flag) {
        let res = await axios.post("http://127.0.0.1:8000/api/register", {
          name: name,
          email: email,
          password: password,
          password_confirmation: passwordR,
        });

        if (res.status === 200) {
          /* يدل على نجاح العملية 200 */
          window.localStorage.setItem(
            "email",
            email
          ); /*عند نجاح التسجيل قم بحفظ الايميل بقاعدة البيانات*/
          window.location.pathname =
            "../Counter/Counter.js"; /* عند نجاح التسجيل انتقل الى الصفحة ذات المسار  */
        }
      }
    } catch (err) {
      setemailError(err.response.status);
    }
  }

  return (
    <div className="Register-page">
      <div className="form-box">
        <form onSubmit={Submit}>
          <h2>SignUp</h2>
          <div className="input-register">
            <i className="fa-solid fa-user"></i>
            <input
              type="text"
              placeholder=" UserName"
              name="username"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input-register">
            <i className="fa-solid fa-envelope"></i>
            <input
              type="email"
              placeholder=" Email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {accept && emailError === 422 && (
              <p className="error" style={{ fontSize: "14px", color: "red" }}>
                Email is already been taken
              </p>
            )}
          </div>

          <div className="input-register">
            <i
              className="fa-solid fa-eye"
              id="iconeyeR"
              onClick={eye}
              style={{ cursor: "pointer" }}
            ></i>
            <input
              type="password"
              placeholder=" Password"
              name="password"
              required
              minLength={8}
              maxLength={20}
              id="pass"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-register">
            <i className="fa-solid fa-lock"></i>
            <input
              type="password"
              placeholder=" Confirm Password"
              name="confirm pass"
              required
              minLength={8}
              maxLength={20}
              value={passwordR}
              onChange={(e) => setPasswordR(e.target.value)}
            />
            {passwordR !== password && accept && (
              <p style={{ fontSize: "15px", color: "red" }}>
                Password does not match
              </p>
            )}
          </div>
          <div className="Buttons">
            <button className="BRegister">Register</button>
            <p>
              Do you already have an account?
              <Link className="BLogin" to={"../Login/Login.js"}>
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
