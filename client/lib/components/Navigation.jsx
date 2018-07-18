import React from 'react';
import { Link } from "react-router-dom";
import { withTracker } from 'meteor/react-meteor-data';
import { MatchsCol } from '../../../imports/api/matchs';

class Navigation extends React.Component {
    render() {
      return(
        <div className="nav">
          <div className="football__wraper">
            <div className="nav__wrap">
              <nav className="nav__items">
                <div>
                  <span className="icon-brand"></span>
                  <Link to="/" className="nav__logo-brand-name regular f_36" href="/">Football<span className="bold">Party</span></Link>
                </div>
                <form className="padding padding-search form-inline ">    
                  <input className="nav__search regular f_22" type="search" placeholder="Search ground, team or someone..." aria-label="Search" />
                </form> 
                <ul className="nav__links medium f_22"> 
                  <li><Link to="/">Find Match</Link></li>
                  <li><Link to="/Grounds">Grounds</Link></li>
                  <li><Link to="/Grounds">Messages</Link></li>
                  <li><Link to="/">Upcoming</Link></li>
                  <span className="regular f_20 ">{this.props.incompleteCount}</span>
                </ul>
              </nav>
              <div className="nav__right">
                <div className="nav__user">
                  <img className="nav__user-img" src="img/topbar/avt-user.png" alt=""/>
                </div>
                <div className="nav__dropdwn">
                  <button className="nav__dropdwn-btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> </button>
                  <div className="nav__dropdwn-menu dropdown-menu" aria-labelledby="dropdownMenu2">
                    <button className="dropdown-item regular f_24" type="button">Accout</button>
                    <button className="dropdown-item regular f_24" type="button">Settings</button>
                    <button className="dropdown-item regular f_24" type="button">Sign out</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {this.props.children}
        </div>
      );
    }
  } 
  export default withTracker(() => {
    return {
      matchs: MatchsCol.find({}, { sort: { datecreated: -1 } }).fetch(),
      incompleteCount: MatchsCol.find({ checked: { $eq: false } }).count(),
    };
  })(Navigation);