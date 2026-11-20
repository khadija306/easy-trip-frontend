import { Link } from "react-router-dom";
import "./Header.css";
export default function Header() {
 
 function LogOut() {
    window.localStorage.removeItem("email");
    window.location.pathname = "/";
  }
 
function change_footer()
{
	document.getElementById('Footer_root_element').style.background = 
	'linear-gradient(50deg ,  rgb(38, 71, 24)   ,#4a9752     ,#3eca47  ,  #93ec93  )' ;
	console.log(document.getElementById('Footer_root_element'));
}
  return (
    <div className="Header_Header">
      <div className="Header_Home-About">
        <Link to={"/"} className="Header_site-image" title="Home page"> </Link>
        <Link to={"/home"} className="Header_Button-Home"  >
          Home
        </Link>
        <Link to={"/"} className="Header_Button-About" >
          About 
        </Link>
      </div>
      <div className="Header_Login-Register" >
        {!window.localStorage.getItem("email") ? (
          <>
            <Link to={"../Register/Register.js"} className="Header_Button-Register" onClick
		={ change_footer }			>
              Register
            </Link>
            <Link to={"../Login/Login.js"} className="Header_Button-Login" onClick={change_footer} >
              Login
            </Link>
          </>
        ) : (
          <Link
            to={"../Login/Login.js"}
            className="Header_Button-Logout"
            onClick={LogOut}
          >
            Log out
          </Link>
        )}
      </div>
    </div>
  );
}
