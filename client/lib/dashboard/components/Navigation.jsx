import React from 'react';
import Dropdown from './Dropdown';

const options = [
	{ 
	  value: ' ', 
	  label: ' ' 
	},
	{ 
	  value: 'accout', 
	  label: 'Accout' 
  },
  { 
	  value: 'settings', 
	  label: 'Settings' 
	},
	{ 
	  value: 'sign out', 
	  label: 'Sign out' 
	},
  ]
  const defaultOption = options[0];
  function _onSelect(option) {
	
  }


class Navigation extends React.Component {
    render() {
      return(
            <div className="nav-wrap navbackground">
              <div className=" football-wraper">
                <div className="navbar-wrap">
                  <div className="logo-div-start">
                    <a className="navbar-logo" href="/">
                      <img className="logo-brand" src="/img/topbar/logo.png" alt=""/>
                      <span className="logo-color ubutu-regular-font">Football</span>
                      <span className="logo-color ubutu-bold-font">Party</span>
                    </a>
                    <form className="padding padding-search form-inline ">
                      <input className="nav-change-input ubutu-regular-font " type="search" placeholder="Search ground, team or someone..." aria-label="Search" />
                    </form>
                    <div className="ubutu-medium-font nav-menu ">
                      <nav>
                        <ul className="navbar-items">     
                          <li className="nav-item">
                            <a className="button-padding nav-items nav-link text-uppercase" href="/">Find Match <span className="sr-only">(current)</span></a>
                          </li>

                          <li className="nav-item active">
                            <a className="button-padding nav-items nav-link text-uppercase" href="/">Grounds  <span className="sr-only">(current)</span></a>
                          </li>

                          <li className="nav-item active">
                            <a className="button-padding nav-items nav-link text-uppercase" href="/">Messages <span className="sr-only">(current)</span></a>
                          </li>

                          <li className="nav-item active">
                            <a className="button-padding nav-items nav-link text-uppercase" href="/">Upcoming <span className="sr-only">(current)</span></a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="logo-div-end">
                    <img className="avt-user" src="/img/topbar/avt-user.png" alt=""/>
                      <Dropdown options={options} onChange={_onSelect} value={defaultOption} placeholder="Select an option" />
                  </div>
                </div>
              </div>
            </div>
            );
          }
        } 
  export default Navigation;