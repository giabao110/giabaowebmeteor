import React, {Component} from 'react';
import Navigation from '../dashboard/components/Navigation.jsx';
import Header from './components/Header';
import Section from './components/section/Section';
import '/node_modules/bootstrap';
import Footer from './components/Footer';

class Dashboard extends Component {
	render (){
		return(
			<div>
				<div><Navigation/></div>
				<div className="football-wraper">
				<Header/>
				<Section/>
				<Footer/>
				</div>
			</div>
		);
	}
}
export default Dashboard;