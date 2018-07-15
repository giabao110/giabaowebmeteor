import React, { Component } from 'react';
import '/node_modules/bootstrap';
import { withTracker } from 'meteor/react-meteor-data';
import { MatchsCol } from '../../../../../imports/api/matchs';
import Header from '../Header';

import Matchs from './Matchs';


class Section extends Component {
    renderMatchs() {
      return this.props.matchs.map((matchs) => (
        <Matchs key={matchs._id} matchs={matchs} />
      ));
    }
    render() {
      return (
      <div>
         <Header/>
        <div className="section__div-row">
          {this.renderMatchs()}
        </div>
        <div className="section-loading">
          <span className="icon-loanding"></span>
          <span className="italic f_24">Loading more...</span>
        </div> 
      </div>
			);
		}
	}

  export default withTracker(() => {
    return {
      matchs: MatchsCol.find({}, { sort: { datecreated: -1 } }).fetch(),
    };
  })(Section);
