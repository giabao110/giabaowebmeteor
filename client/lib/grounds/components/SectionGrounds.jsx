import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { GroundsCol } from '../../../../imports/api/grounds';

import Grounds from './Grounds';

class SectionGrounds extends React.Component {
  renderGrounds() {
    return this.props.grounds.map((grounds) => (
      <Grounds key={grounds._id} grounds={grounds} />
    ));
  }
    render() {
      return (
          <div>
              <div className="sectionground-div-row">
                  {/* Group1 */}  
                    {this.renderGrounds()}
                    <div className="sectionground-groupwhile"></div>  
              </div>

          <div className="section-loading">
            <span className="icon-loanding"></span>
            <span className="italic f_24">Loading more ...</span>
          </div>
      </div>
      );
    }
  }
  
  export default withTracker((props) => {
    // console.log(GroundsCol.find({_id: new Mongo.ObjectID(props.match.params.GroundID)}, { sort: { createdAt: -1 } }).fetch());
    return {
      grounds: GroundsCol.find({}, { sort: { createdAt: -1 } }).fetch(),
    };
  })(SectionGrounds) 

