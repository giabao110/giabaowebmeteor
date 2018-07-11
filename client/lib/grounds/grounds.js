import React, {Component} from 'react';
import '/node_modules/bootstrap';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SectionGrounds from '../grounds/components/SectionGrounds';
import Headergrounds from '../grounds/components/headergrounds/Headergrounds';

class Grounds extends Component {
	render (){
		return(
			<div>
        <Navigation/>
          <div className="football__wraper">
            <Headergrounds/>
            <SectionGrounds/>
            <Footer/>
          </div>
			</div>
		);
	}
}
export default Grounds;