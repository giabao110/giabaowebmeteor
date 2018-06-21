import React from 'react';


class Header extends React.Component {
    render() {
      return (
				<div className="header-row container">
					<div className="header-title ubutu-light-font">
							<span className="match">Match</span>
					</div>
					<div className="box">
						<div className="header-col-nearest ">
							<div className="input-group ">
								<select className="ubutu-regular-font header-border ">
									<option value="1">Nearest</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</select>
							</div>
						</div>
							<div className="header-col-rating ">
								<div className="input-group">
									<select className="ubutu-regular-font header-border ">
										<option value="1">Rating</option>
										<option value="2">Two</option>
										<option value="3">Three</option>
									</select>
								</div>
							</div>
						</div>
						<div>
							<form className="padding padding-search form-inline ">
								<input className="header-change-input ubutu-regular-font " type="search" placeholder="Search Team..." aria-label="Search" />
							</form>
						</div>
						<div>
									<button type="button" className="header-button ubutu-regular-font text-uppercase btn btn-success ">Quick Match</button>
						</div>
					</div>
					);
				}
			}
  
	export default Header;
	
