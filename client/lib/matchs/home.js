import '/node_modules/bootstrap';
import React, {Component} from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Header from './components/Header';
import Slider from './components/section/Slider';
import Section from './components/section/Section';

class Home extends Component {
	render (){
		return(
			<div>
        <Navigation/>
          <div className="football__wraper">
            <Header/>
            <Slider/>
            <Footer/>
          </div>
			</div>
		);
	}
}
export default Home;