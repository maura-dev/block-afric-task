import React from "react";

export default function ActivityItem({image, text, amount}){

	return(
      	<div className="activity-item">
      		<i className={image}></i>
        	<p>{text}</p>
      		<p>{amount}</p>
      	</div>
	)

}