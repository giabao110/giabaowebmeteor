
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
        <section className="section__div">
          <div className="section__div-row">
              <SaintFC/>

              
          </div>

          <div className="section__div-row">
             

              
          </div>

          <div className="section__div-row">
             

              
          </div>
            <div className="section-loading">
                <span className="icon-loanding"></span>
                <span className="italic f_24">Loading more ...</span>
            </div>
		  	</section>
			);
		}
	}

	export default Section;
