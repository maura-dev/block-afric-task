import React from "react";

export default function ActivityItem({date, description, amount}){

	return(
      	<div className="activity-item">
      		<p>{date}</p>
        	<p>{description}</p>
      		<p>{amount}</p>
      	</div>
	)

}