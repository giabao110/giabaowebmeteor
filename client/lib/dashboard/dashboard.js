import React, {Component} from 'react';
import Navigation from '../dashboard/components/Navigation.jsx';
import Header from './components/Header';
import DropdownPage from './components/test';


class Dashboard extends Component {
	render (){
		return(
			<div>
				<Navigation/>
				<Header/>
				<DropdownPage/>
				<div className=" football-wraper container">
						<h1 className="ubutu-regular-font">Party</h1>
				</div>
			</div>
		);
	}
}
export default Dashboard;