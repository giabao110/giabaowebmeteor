import React, {Component} from 'react';
import Navigation from '../dashboard/components/Navigation';
import '/node_modules/bootstrap';
import Footer from '../dashboard/components/Footer';
import SectionGrounds from '../grounds/components/SectionGrounds';
import Headergrounds from '../grounds/components/headergrounds/Headergrounds';

class Grounds extends Component {
	render (){
		return(
			<div>
				<div><Navigation/></div>
				<div  className="football__wraper">
				<Headergrounds/>
				<SectionGrounds/>
				<Footer/>
				</div>
			</div>
		);
	}
}
export default Grounds;