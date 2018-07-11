import React from 'react';

class Navigation extends React.Component {
    render() {
      return(
        <header className="nav">
          <div className="football__wraper">
            <div className="nav__wrap">
              <nav className="nav__items">
                <div>
                  <span className="icon-brand"></span>
                  <a className="nav__logo-brand-name regular f_36" href="/">Football<span className="bold">Party</span></a>
                </div>
                <form className="padding padding-search form-inline ">    
                  <input className="nav__search regular f_22" type="search" placeholder="Search ground, team or someone..." aria-label="Search" />
                </form> 
                <ul className="nav__links medium f_22">     
                  <li><a href="/">Find Match</a></li>
                  <li><a href="/Grounds">Grounds</a></li>
                  <li><a href="/">Messages</a></li>
                  <li><a href="/">Upcoming </a></li>
                  <span className="regular f_20 ">2</span>
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
        </header>
      );
    }
  } 
  export default Navigation;