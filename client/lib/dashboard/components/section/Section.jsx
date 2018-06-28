
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

              <SaintFC/>
          </div>

          <div className="section__div-row">
              <SaintFC/>

              <SaintFC/>
          </div>

          <div className="section__div-row">
              <SaintFC/>

              <SaintFC/>
          </div>
            <div className="section-loading f_24">
              <div>
                <img src="img/loading.png" alt=""/>
                <span className="italic">Loading more ...</span>
              </div>
            </div>
		  	</section>
			);
		}
	}

	export default Section;
