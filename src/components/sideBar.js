import React from 'react';
import Logo from './afric.gif'
import {Link} from 'react-router-dom';

export default function SideBar() {
	return (
		<div className="side-bar">
			<Link to="/"><div className="side-bar-item">
				<img src={Logo} alt="logo" width="100%" height="auto"/>
			</div></Link>
			<Link to="/"><div className="side-bar-item item">
				<i className="fas fa-home"></i>
				<p>Home</p>
			</div></Link>
			<Link to="/activity"><div className="side-bar-item item">
				<i className="fas fa-tasks"></i>
				<p>Activity</p>
			</div></Link>
			<Link to="/wallet"><div className="side-bar-item item">
				<i className="fas fa-wallet"></i>
				<p>Wallet</p>
			</div></Link>
			<Link to="/market"><div className="side-bar-item item">
				<i className="fas fa-store-alt"></i>
				<p>Market</p>
			</div></Link>
			<Link to="/earn"><div className="side-bar-item item">
				<i className="fas fa-gifts"></i>
				<p>Earn</p>
			</div></Link>
		</div>
	);
}