
import React from 'react';
import '/node_modules/bootstrap';
import SaintFC from './tab/SaintFC';
import HanoiACB from './tab/HanoiACB';
import Arsenal from './tab/Arsenal';
import Bayern from './tab/Bayern';
import Madrid from './tab/Madrid';
import Barcelona from './tab/Barcelona';




class Section extends React.Component {
    render() {
      return (
        <div className="section-div">
			<div className="section-div-row">
				<div className="section-form-wraper">
					<SaintFC/>
				</div>

				<div className="section-form-wraper">
					<HanoiACB/>
				</div>
			</div>

			<div className="section-div-row">
				<div className="section-form-wraper">
						<Arsenal/>
				</div>
				<div className="section-form-wraper">
						<Bayern/>
				</div>
			</div>

			<div className="section-div-row">
				<div className="section-form-wraper">
					<Madrid/>
				</div>
				<div className="section-form-wraper">
					<Barcelona/>
				</div>
			</div>
				<div className="section-loading">
					<div>
						<img src="img/loading.png" alt=""/>
						<span className="ubutu-italic-font">Loading more ...</span>
					</div>
				</div>
			</div>
			);
		}
	}

	export default Section;
