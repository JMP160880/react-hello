import React from "react";

//include images into your bundle
//import "../styles/index.css";

//create your first component
const Home = (props) => {
	return (
<div className="contador">
	<div className="clock">
	<i class="fa fa-clock"></i>
	</div>
	<div className="six">{props.sextoDigito %10}</div>
	<div className="five">{props.quintoDigito %10}</div>
	<div className="four">{props.cuartoDigito %10}</div>
	<div className="three">{props.tercerDigito %10}</div>
	<div className="two">{props.segundoDigito %10}</div>
	<div className="one">{props.primerDigito %10}</div> 
</div>)

	
	
};



export default Home;
