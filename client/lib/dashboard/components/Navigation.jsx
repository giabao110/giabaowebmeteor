import React from 'react';

class Navigation extends React.Component {
    render() {
      return(
        <header className="nav__wrap nav__background">
          <div className="football__wraper">
            <div className="nav__wrap">
              <div className="nav__div-left">
                <div className="nav__div-left-logo">
                  <a className="nav__logo" href="">
                    <img className="nav__logo-brand" src="/img/topbar/logo.png" alt=""/>
                  </a>
                  <a className="nav__logo-brand-name regular f_36" href="">Football<span className="bold">Party</span></a>
                <form className="padding padding-search form-inline ">
                  <input className="nav__search regular f_22" type="search" placeholder="Search ground, team or someone..." aria-label="Search" />
                </form>
                <div className="medium nav-menu ">
                  <nav>
                    <ul className="nav_items navbar-items">     
                      <li className="nav-item">
                        <a className="nav__items-a nav-items nav-link text-uppercase f_22 g_5" href="/">Find Match <span className="sr-only">(current)</span></a>
                      </li>

                      <li className="nav-item active">
                        <a className="nav__items-a nav-items nav-link text-uppercase f_22 g_5" href="/">Grounds  <span className="sr-only">(current)</span></a>
                      </li>

                      <li className="nav-item active">
                        <a className="nav__items-a nav-items nav-link text-uppercase f_22 g_5" href="/">Messages <span className="sr-only">(current)</span></a>
                      </li>

                      <li className="nav-item active">
                        <a className="nav__items-a nav-items nav-link text-uppercase f_22 g_5" href="/">Upcoming </a>
                      </li>
                      <span className="nav__items-a-span regular f_20 ">2</span>
                    </ul>
                  </nav>
                </div>
                </div>
              </div>
              <div className="nav__div-right">
                <div className="nav__user">
                  <img className="nav__user-img" src="img/topbar/avt-user.png" alt=""/>
                </div>
                <div className="nav__dropdwn">
                  <button className="nav__dropdwn-btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                </button>
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