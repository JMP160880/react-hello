//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import Home from "./component/home.jsx";


// include your styles into the webpack bundle
import "../styles/index.css";


let tiempo = 0;
setInterval(function(){
    
    const six = Math.floor(tiempo/100000);
    const five = Math.floor(tiempo/10000);
    const four = Math.floor(tiempo/1000);
    const three = Math.floor(tiempo/100);
    const two = Math.floor(tiempo/10);
    const one = Math.floor(tiempo/1);
   
    tiempo++

    ReactDOM.render(<Home primerDigito = {one} segundoDigito = {two} tercerDigito = {three} cuartoDigito = {four}
         quintoDigito = {five} sextoDigito = {six} />, document.querySelector("#app"));

},1000)



