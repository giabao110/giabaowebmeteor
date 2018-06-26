
import React from 'react';


class Header extends React.Component {
    render() {
      return (
				<div className="football-wrapper header-row ">
          <div className="logo-div-start">
            <div className="header-title ubutu-light-font font-large-70">
              <span>Match</span>
            </div>
          <div className="box">
            <div className="header-col-nearest ">
              <div className="input-group ">
                <select className="ubutu-regular-font header-border font-small">
                  <option value="1">Nearest</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="header-col-rating ">
              <div className="input-group">
                <select className="ubutu-regular-font header-border font-small">
                  <option value="1">Rating</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            </div>
          </div>
						<div className="logo-div-end">
              <form className="padding padding-search form-inline ">
                <input className="header-change-input ubutu-regular-font font-ssmall" type="search" placeholder="Search Team..." aria-label="Search" />
              </form>
              <div>
                <button type="button" className="header-button ubutu-regular-font text-uppercase font-small-28">Quick Match</button>
              </div>
						</div>	
					</div>
					);
				}
			}
  
	export default Header;
