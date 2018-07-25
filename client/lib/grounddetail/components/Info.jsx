import React from 'react';
import Step1 from './Step1';

import { withRouter } from "react-router-dom";
import { withTracker } from 'meteor/react-meteor-data';
import { GroundsCol } from '../../../../imports/api/grounds';

class Info extends React.Component {
    render() {
      if(this.props.grounds.length === 0) return ''
      return (
      <div className="info">
        <div className="info__left">
           <img className="info__left-img" src={this.props.grounds[0].image} alt=""/>
        </div>
        <div className="info__right">
           <title className="info__right-title medium f_60">{this.props.grounds[0].text}</title>
           <p className="info__right-title-s regular f_24 g_1">{this.props.grounds[0].location}</p>
           <div className="info__right-rate-border">
              <img className="info__right-rate" src="img/saintlouisfc/rate.png" alt=""/>
           </div>
           <div className="info__content-about">
              <div className="info__right-user-div">
                 <img className="info__right-user" src="http://www.one-versus-one.com/img/rounds/avatar-round-ronaldo.png" alt=""/>
              </div>
              <div className="info__right-name regular">
                 <p className="f_24" >{this.props.grounds[0].author}</p>
                 <p className="f_22 g_2" >Owner</p>
              </div>
           </div>
           <p className="info__right-content regular f_24">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
           <p className="info__right-price regular f_46 gr">${this.props.grounds[0].price}.00<span className="info__right-price-s regular f_24 g_3">/hr</span></p>
           <div className="info__right-button">
              <Step1/>
              <div className="info__right-farvo regular f_24">
                 <span className="icon-farvo info__right-farvoicon"></span>
                 <a className="info__right-farvo-img-p g_3" href="">
                    <p>Farvorite</p>
                 </a>
              </div>
              <div className="info__right-share regular f_24">
                 <span className="icon-share info__right-farvoicon"></span>
                 <a className="info__right-farvo-img-p g_3" href="">
                    <p className="g_3">Share</p>
                 </a>
              </div>
           </div>
           <p className="info__right-hour regular f_22 gr"><span className="f_36">{this.props.grounds[0].hoursfree}</span> hours <span className="info__right-hours g_4">Available Today</span></p>
        </div>
     </div>
      );
    }
  }
  export default withRouter(withTracker((props) => {
    Meteor.subscribe('grounds');
    return {
      grounds: GroundsCol.find({_id: new Mongo.ObjectID(props.match.params.GroundID)}, { sort: { createdAt: -1 } }).fetch(),
    };
  })(Info)) 


