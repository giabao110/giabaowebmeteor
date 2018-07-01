import React from 'react';


class Header extends React.Component {
    render() {
      return (
        <div className="header__">
          <div className="header__left">
              <div className="light f_70">
                <span>Match</span>
              </div>
              <div className="header__box">
                <div className="header__col-nearest ">
                    <div className="input-group">
                      <select className="regular header__border f_24">
                          <option value="1">Nearest</option>
                          <option value="2">Nearest</option>
                          <option value="3">Nearest</option>
                      </select>
                    </div>
                </div>
                <div className="header__col-rating ">
                    <div className="input-group">
                      <select className="regular header__border f_24">
                          <option value="1">Rating</option>
                          <option value="2">Rating</option>
                          <option value="3">Rating</option>
                      </select>
                    </div>
                </div>
              </div>
          </div>
          <div className="header__right">
              <form className="padding padding-search form-inline ">
                <input className="header__search regular f_22" type="search" placeholder="Search Team..." aria-label="Search" />
              </form>
              <button type="button" className="header_button regular f_28">Quick Match</button>
          </div>
        </div>
        );
      }
    }
  
	export default Header;
