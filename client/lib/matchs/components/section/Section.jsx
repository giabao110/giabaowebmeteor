import React, { Component } from 'react';
import '/node_modules/bootstrap';
import { withTracker } from 'meteor/react-meteor-data';
import { MatchsCol } from '../../../../../imports/api/matchs';
import Header from '../Header';
import Matchs from './Matchs';

class Section extends Component {
    constructor(props) {
      super(props);
      this.state = {
        strSearch: '',
        strSortRate: '',
      };
      this.handleSearch = this.handleSearch.bind(this);
      this.handleSortRate = this.handleSortRate.bind(this);
    }

    renderMatchs() {
      // console.log(this.state.strSortRate);
      let matchs= this.props.matchs
      // console.log('strSearch: ',this.state.strSearch);
      if(this.state.strSortRate.toString() !== '')
        matchs = matchs.filter(match => match.rating.toString() === this.state.strSortRate);
      
      // console.log('matchs1: ',matchs);
      if(this.state.strSearch.toString() !== '')
      matchs = matchs.filter(match => match.text.toLowerCase().includes(this.state.strSearch.toLowerCase()));
     
      // console.log('matchs2: ',matchs);
      return matchs.map((matchs) =><Matchs key={matchs._id} matchs={matchs}/>)
    }

    handleSearch(value){
      this.setState({
        strSearch: value
      });
    }

    handleSortRate(value){
      this.setState({
        strSortRate: value
      });
    }
    
    render() {
      return (
      <div>
         <Header onClickSearchGo={this.handleSearch} onClickSortRate={this.handleSortRate}/>
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
      matchs: MatchsCol.find({}, { sort: { createdAt: -1 } }).fetch(),
    };
  })(Section);
