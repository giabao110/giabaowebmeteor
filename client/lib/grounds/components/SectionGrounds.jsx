import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { GroundsCol } from '../../../../imports/api/grounds';

import Grounds from './Grounds';

class SectionGrounds extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     strSearch: '',
  //     strSortRate: '',
  //   };
  //   this.handleSearch = this.handleSearch.bind(this);
  //   this.handleSortRate = this.handleSortRate.bind(this);
  // }

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
    Meteor.subscribe('grounds');
    Meteor.subscribe('matchs');
    return {
      grounds: GroundsCol.find({}, { sort: { createdAt: -1 } }).fetch(),
    };
  })(SectionGrounds) 

