import React, { Component } from 'react';
import  '/node_modules/bootstrap';
import	Modal from './Modal';
import  Rate from '../../../components/Rating';
import { withTracker } from 'meteor/react-meteor-data';
import { MatchsCol } from '../../../../../imports/api/matchs';


class Matchs extends Component { 
  render() {
    return ( 
    <div className="section_div">
      <div className="section__form">
         <div className="section__abv">
            <div className="section__abvleft">
               <div className="section__abvleftdiv">
                  <img className="section__abv-leftimg" src={this.props.matchs.logo} alt="" />
               </div>
               <span className="section__abv-leftrate"> <Rate rate={this.props.matchs.rating}/></span>
               
            </div>
            <div className="section__formabv-right">
               <p className="section__title regular f_34">{this.props.matchs.text}</p>
               <p className="section__stadium regular f_24">
                  <span className="icon-logogrey section__stadiumimg"></span> {this.props.matchs.stadium}
               </p>
               <div className="section__time">
                  <div className="section__time-number light f_60 gr">10</div>
                  <div className="section__time-day regular f_24"> 
                     <span className="section__time-dayabv">Monday</span>
                     <span className="section__time-daybl">Oct 2017</span>
                  </div>
                  <div className="section__time-from regular f_24">
                     <span className="section__time-dayabv">From:</span>
                     <span className="section__time-dayabv">To:</span>
                  </div>
                  <div className="regular f_24 gr">
                     <span className="section__time-dayabv">08:00am</span>
                     <span className="section__time-dayabv">09:00am</span>
                  </div>
               </div>
            </div>
         </div>
         <div className="section__bl">
            <div className="section__blleft">
               <span className="icon-king"></span>
               <span className="section__blleft-user">
               <img className="section__blleft-userimg" src="img/dashboard/saintlouisfc/haonguyen.png" alt="" />
               </span>
               <span className="regular f_24">{this.props.matchs.username}</span>
            </div>
            <div className="section__blright">
               <img src="img/topbar/people.svg" className="section__blrightlg"></img>
               <span className="regular gr f_24">{this.props.matchs.players} Players</span>
            </div>
            <Modal  
              name={this.props.matchs.text} 
              avatar={this.props.matchs.logo}
              user={this.props.matchs.username}
              player={this.props.matchs.players}
              stadium={this.props.matchs.stadium}
            />
         </div>
      </div>
    </div>
    );
  }
}

export default (Matchs);
