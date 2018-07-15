import React from 'react';
import { Link } from "react-router-dom";


class Grounds extends React.Component {
    render() {
      return (
        <div className="sectionground-group">
            <Link to="/Grounddetail" className="sectionground-img">
                <img className="sectionground-imgg" src={this.props.grounds.image} alt=""/>
            </Link>
            <div className="sectionground-content">
                <div className="sectionground-content-title regular">
                  <Link to="/Grounddetail" className="f_34 g_3">{this.props.grounds.text}</Link>
                </div>
                <div className="sectionground-content-info">
                  <span className="sectionground-location f_24 g_1">{this.props.grounds.location}</span>
                  <div className="sectionground-content-right">
                      <span className="f_36 gr">${this.props.grounds.price}.00</span>
                      <span id="hour" className="f_20 gr">/hour</span>
                  </div>
                </div>
            </div>
        </div>

        );
      }
    }
  
	export default Grounds;