import { Route, Routes } from "react-router-dom";
 
import Login from "./Components/Login/Login";
 
import Register from "./Components/Register/Register";
  
import Header from "./Components/Header/Header";

import Footer from "./Components/Footer/Footer";

import About from './About/About';
import "./all.min.css";

export default function App() {
	let style_body = {
		 
		fontFamily: 'Lora',
		backgroundColor: 'rgba(109, 128, 197, 0.216)',
		zIndex:-1,
}
	return (
    <div style={style_body} >
      <Header/>
		  <Routes>
				<Route path="/" element={<About />}  />
				<Route path="/Register/Register.js" element={<Register />} />
				<Route path="/Login/Login.js" element={<Login />} />
		  </Routes> 
     
	  <Footer/>
    </div>
	);
 
 
}
