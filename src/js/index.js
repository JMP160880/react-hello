//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";


// include your styles into the webpack bundle
import "../styles/index.css";

const SimpleCounter = (componentes) => {
    return (<div className="contador">
        <div className="clock">

        </div>
        <div className="six">{componentes.digitSix}</div>
        <div className="five">{componentes.digitFive}</div>
        <div className="four">{componentes.digitFour}</div>
        <div className="three">{componentes.digitThree}</div>
        <div className="two">{componentes.digitTwo}</div>
        <div className="one">{componentes.digitOne}</div> 
    </div>)
}

let tiempo = 0;
setInterval(function(){
    const six = Math.floor(tiempo/100000);
    const five = Math.floor(tiempo/10000);
    const four = Math.floor(tiempo/1000);
    const three = Math.floor(tiempo/100);
    const two = Math.floor(tiempo/10);
    const one = Math.floor(tiempo/1);

    ReactDOM.render(<SimpleCounter digitOne = {one} digitTwo = {two} digitThree = {three} digitFour = {four}
         digitFive = {five} digitSix = {six} />, document.querySelector("#app"));

},1000)



