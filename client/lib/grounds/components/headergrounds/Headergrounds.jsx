import React from 'react';


class Headergrounds extends React.Component {
    render() {
      return (
				<div className="header-row ">
          <div className="logo-div-start">
            <div className="header-title ubutu-light-font font-large-70">
              <span>Grounds</span>
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
                  <option value="1">Price Range</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="header-col-rating ">
              <div className="input-group">
                <select className="ubutu-regular-font header-border font-small">
                  <option value="1">Available Only</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            </div>
          </div>
						<div className="logo-div-end">
              <form className="padding padding-search form-inline ">
                <input className="header-change-input ubutu-regular-font font-ssmall" type="search" placeholder="Search Ground..." aria-label="Search" />
              </form>
						</div>	
					</div>
					);
				}
			}
  
	export default Headergrounds;
