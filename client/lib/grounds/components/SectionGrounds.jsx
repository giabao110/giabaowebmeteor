import React from 'react';
import Group1 from './headergrounds/tab/Group1';
import Group2 from './headergrounds/tab/Group2';
import Group3 from './headergrounds/tab/Group3';
import Group4 from './headergrounds/tab/Group4';
import Group5 from './headergrounds/tab/Group5';
import Group6 from './headergrounds/tab/Group6';

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
  
  export default withTracker(() => {
    return {
      grounds: GroundsCol.find({}, { sort: { createdAt: -1 } }).fetch(),
    };
  })(SectionGrounds);

