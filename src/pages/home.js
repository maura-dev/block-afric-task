import React from "react";
import Button from "../components/button.js";
import ActivityItem from "../components/activityItem.js";
import Logo from '../components/afric.gif'
import {Link} from 'react-router-dom';

export default function Home(){
	return(
      	<div className="home">
      		<div className="main-top">
      			<Link to="/"><div className="mobile-logo">
					<img src={Logo} alt="logo" width="70px" height="auto"/>
				</div></Link>

				<div className="top">
	      			<i className=" fas fa-bell"></i>
	      			<i className=" fas fa-user-circle"></i>
	      			&nbsp; &nbsp;<Button text="Logout"/>
      			</div>
      		</div>

      		<input type="text" placeholder="What are you interested in?" />

      		<div className="main">

	      		<div className="left">
	      			<div className="rates">
	      				<div className="rates-item">
	      					<p>AFYA</p>
	      					<p>143.00</p>
	      					<sub>Balance</sub>
	      				</div>
	      				<div className="rates-item">
	      					<p>ZAR</p>
	      					<p>R21.00</p>
	      					<sub>Equivalent</sub>
	      				</div>
	      			</div>

	      			<div>
	      				<p style={{marginLeft:"30px"}}>Select Currency:</p>
	      				<div className="currency">
	      					<select>
	      						<option value="0.00000001" selected>AFYA</option>
	      						<option value="0.0698">USD</option>
	      						<option value="0.6.4772">ARS</option>
	      						<option value="0.3902">BRL</option>
	      						<option value="0.0873">CAD</option>
	      						<option value="49.0935">CLP</option>
	      						<option value="1.3902">MXN</option>
	      					</select>&nbsp; 0.00000001</div>
	      			</div>

	      			<div className="buttons">
	      				<Button text="&nbsp;Send&nbsp;"/>
	      				<Button text="Receive"/>
	      			</div>
	      		</div>

	      		<div className="right">
	      			<p style={{marginLeft:"30px"}}>Recent Activities</p>
	      			<ActivityItem image="fas fa-ribbon" text="HIV Blood Draw Test" amount="A100"/><br/>
	      			<ActivityItem image="fas fa-x-ray" text="TB Radiology XRay" amount="A30"/><br/>
	      			<ActivityItem image="fas fa-thermometer" text="Blood Pressure Check" amount="A10"/><br/>
	      			<ActivityItem image="fas fa-thermometer-quarter" text="Temperature check" amount="A20"/><br/>
	      			<ActivityItem image="fas fa-weight" text="Body weight Check" amount="A10"/>

	      		</div>

	      	</div>
      
      	</div>
	)

}