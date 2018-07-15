import React from 'react';
import { Link } from "react-router-dom";

class Group1 extends React.Component {
    render() {
      return (
				<div>
            <div className="sectionground-img">
                <img src={this.props.image} alt=""/>
            </div>
            <div className="sectionground-content">
                <div className="sectionground-content-title regular">
                  <Link to="/Grounddetail" className="f_34">Old Trafford Stadium</Link>
                </div>
                <div className="sectionground-content-info">
                  <span className="f_24 g_1">Sir Matt Busby Way, Stretford Manchester M16 0RA, UK</span>
                  <div className="sectionground-content-right">
                      <span className="f_36 gr">$25.00</span>
                      <span id="hour" className="f_20 gr">/hour</span>
                  </div>
                </div>
            </div>
        </div>
					);
				}
			}
  
	export default Group1;