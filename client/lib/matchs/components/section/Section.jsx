import React, { Component } from 'react';
import '/node_modules/bootstrap';
import { withTracker } from 'meteor/react-meteor-data';
import { MatchsCol } from '../../../../../imports/api/matchs';
import Header from '../Header';
import Matchs from './Matchs';
import Slider from './Slider';

class Section extends Component {
    constructor(props) {
      super(props);
      this.state = {
        strSearch: '',
        strSortRate: '',
        strDay: 5,
      };
      this.handleSearch = this.handleSearch.bind(this);
      this.handleSortRate = this.handleSortRate.bind(this);
      this.handleDay = this.handleDay.bind(this);
    }

    renderMatchs() {
      console.log(this.state.strDay);
      let matchs= this.props.matchs
      // console.log('strSearch: ',this.state.strSearch);
      if(this.state.strDay.toString() !== '')
      matchs = matchs.filter(match => match.rating.toString() === this.state.strDay.toString());

      if(this.state.strSortRate.toString() !== '')
        matchs = matchs.filter(match => match.rating.toString() === this.state.strSortRate);
      
      // console.log('matchs1: ',matchs);
      if(this.state.strSearch.toString() !== '')
      matchs = matchs.filter(match => match.text.toLowerCase().includes(this.state.strSearch.toLowerCase()));
      console.log("day1",this.state.strDay);

       console.log('matchs: ',matchs);
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

    handleDay(value){
      this.setState({
        strDay: value
      });
    }
    
    render() {
      return (
      <div>
         <Header onClickSearchGo={this.handleSearch} onClickSortRate={this.handleSortRate}/>
         <Slider matchs={this.renderMatchs()} handlegetDay={this.handleDay}/>

        {/* <div className="section-loading">
          <span className="icon-loanding"></span>
          <span className="italic f_24">Loading more...</span>
        </div>  */}
      </div>
			);
		}
	}

  export default withTracker(() => {
    Meteor.subscribe('matchs');
    return {
      matchs: MatchsCol.find({}, { sort: { createdAt: -1 } }).fetch(),           
    };
  })(Section);
