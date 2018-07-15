import React from 'react';
import Comments from './Comments';
import History from './History';
import Info from './Info';
import GroundInfo from './GroundInfo';

class Grounddetail extends React.Component {
    render() {
      return (
        <div>
          <GroundInfo/>
            <Info/>
            <div className="headerground__layout">
          <Comments/>
          <History/>
        </div>
     </div>
      );
    }
  }
  
	export default Grounddetail; 
