import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { withTracker } from 'meteor/react-meteor-data';

class Grounds extends React.Component {
    render() {
      return (
        <div className="sectionground-group">
            <Link to={`/Grounddetail/${this.props.grounds._id._str}`} className="sectionground-img">
                <img className="sectionground-imgg" src={this.props.grounds.image} alt=""/>
            <div className="sectionground-content">
                <div className="sectionground-content-title regular">
                  <span className="f_34 g_3">{this.props.grounds.text}</span>
                </div>
                <div className="sectionground-content-info">
                  <span className="sectionground-location f_24 g_1">{this.props.grounds.location}</span>
                  <div className="sectionground-content-right">
                      <span className="f_36 gr">${this.props.grounds.price}.00</span>
                      <span id="hour" className="f_20 gr">/hour</span>
                  </div>
                </div>
            </div>
            </Link>
        </div>
        );
      }
    }
  
    export default (Grounds); 
  