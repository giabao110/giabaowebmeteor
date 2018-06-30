import '/node_modules/bootstrap';
import React, {Component} from 'react';
import Navigation from '../dashboard/components/Navigation';
import Footer from '../dashboard/components/Footer';
import Grounddetail from '../grounddetail/components/Grounddetail';

class Grounds extends Component {
	render (){
		return(
			<div>
				<div><Navigation/></div>
        <div className="football__wraper">
          <Grounddetail/>
          <Footer/>
        </div>
			</div>
		);
	}
}
export default Grounds;