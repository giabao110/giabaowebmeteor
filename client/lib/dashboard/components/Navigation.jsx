import React from 'react';


class Navigation extends React.Component {
    render() {
      return (
      <nav className="navbar navbar-expand-lg navbar-dark navbackground">
          <div className="none-hover football-wraper container">
            <a className="navbar-logo" href="/">
              <img src="./" alt=""/>
              <span className="logo-color ubutu-regular-font">Football</span>
              <span className="logo-color ubutu-bold-font">Party</span>
            </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <form className="padding-search form-inline my-2">
              <input className="change-input ubutu-regular-font " type="search" placeholder= "Search ground, team or someone..." aria-label="Search" />
          </form>

          <div className="ubutu-medium-font nav-menu collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-items navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link text-uppercase" href="/">Find Match <span className="sr-only">(current)</span></a>
              </li>

              <li className="nav-item active">
                <a className="nav-link text-uppercase" href="/">Grounds  <span className="sr-only">(current)</span></a>
              </li>

              <li className="nav-item active">
                <a className="nav-link text-uppercase" href="/">Messages <span className="sr-only">(current)</span></a>
              </li>

              <li className="nav-item active">
                <a className="nav-link text-uppercase" href="/">Upcoming <span className="sr-only">(current)</span></a>
              </li>

              
            </ul>
            <div className="nav-item dropdown justify-content-end">
                <a className="nav-link dropdown-toggle navdropdown" href="/" id="navbarDropdown" role="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/">Action</a>
                  <a className="dropdown-item" href="/">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/">Something else here</a>
                </div>
              </div>
            </div>
          </div>
        </nav>  
      );
    }
  }
  
  export default Navigation;