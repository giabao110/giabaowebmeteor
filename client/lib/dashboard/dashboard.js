import React, {Component} from 'react';
import Navigation from '../dashboard/components/Navigation.jsx';


class Dashboard extends Component {
	render (){
		return(
			<div>
				<Navigation/>
				<div className=" football-wraper container">
						<h1 className="ubutu-regular-font">Party</h1>
				</div>
			</div>
		);
	}
}
export default Dashboard;