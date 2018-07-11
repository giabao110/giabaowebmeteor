
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
        <div className="section__div">
          <hr className="sexy-line-cus" />
        <div className="section__div-row">
      <SaintFC img="img/dashboard/saintlouisfc/logo.png" />
           <HanoiACB/>
        </div>
        <div className="section__div-row">
           <Arsenal/>
           <Bayern/>
        </div>
        <div className="section__div-row">
           <Madrid/>
           <Barcelona/>
        </div>
        <div className="section-loading">
           <span className="icon-loanding"></span>
           <span className="italic f_24">Loading more ...</span>
        </div>
     </div>
			);
		}
	}

	export default Section;
