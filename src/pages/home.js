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
	      					<p><i className="fas fa-wallet"></i></p>
	      					<p>150.00</p>
	      					<sub>Balance</sub>
	      				</div>
	      				<div className="rates-item">
	      					<p>AFYA</p>
	      					<p>143.00</p>
	      					<sub>Balance</sub>
	      				</div>
	      				<div className="rates-item">
	      					<p>&#8358;</p>
	      					<p>21.00</p>
	      					<sub>Balance</sub>
	      				</div>
	      			</div>

	      			<div className="currency-container"><br/>
	      				<p style={{marginLeft:"30px", fontWeight:"700"}}>Select Currency:</p><br/>
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

	      				<div className="buttons">
	      					<Button text="&nbsp;Send&nbsp;"/>
	      					<Button text="Receive"/>
	      				</div>
	      			</div>

	      			
	      		</div>

	      		<div className="right">
	      			<p style={{marginLeft:"30px", fontWeight:"700"}}>Recent Activities</p>
	      			<ActivityItem date="Date" description="Description" amount="Amount(&#8358;)"/>
	      			<ActivityItem date="1/1/21" description="Sent" amount="&#8358;100.00"/>
	      			<ActivityItem date="2/2/21" description="Received" amount="&#8358;200.00"/>
	      			<ActivityItem date="3/3/21" description="Sent" amount="&#8358;300.00"/>
	      			<ActivityItem date="4/4/21" description="Received" amount="&#8358;400.00"/>
	      			<ActivityItem date="5/4/21" description="Sent" amount="&#8358;500.00"/>
	      			<ActivityItem date="6/4/21" description="Received" amount="&#8358;600.00"/>
	      			

	      		</div>

	      	</div>
      
      	</div>
	)

}