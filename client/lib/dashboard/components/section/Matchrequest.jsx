import React from 'react';
import '/node_modules/bootstrap';

class Matchrequest extends React.Component {
    render() {
      return (
        <div className="section-modal modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="join__cus modal-content">
              <div className="join__cont-title">
                <div className="medium f_40">Upcoming Match</div>
                <div className="join__contright regular f_24">
                  <button className="join__contright-celendar">
                    <a className="join__contright-celen" href="">Add to Calendar</a>
                  </button>  
                  <button className="join__contright-share">
                  <div className="join__contright-shareimg">  
                    <img className="join__contright-shareimgg" src="img/matchrequest/formb.png" alt=""/>
                    </div>
                    <p>Share</p>
                  </button>
                </div> 
              </div>
              <div className="join__body">
								<div className="join__match">
                  <div className="join__team1"> 
                    <div className="join__team1-logo">
                      <img className="join__team1-logoimg" src="img/bayernmuchen/avt.png" alt=""/>
                    </div>
                    <span className="join__team1-name regular f_42" >
                    Bayern Muchen
                    </span>
                    <span className="join__team1-rate">
                      <img className="join__team1-rateimg" src="img/saintlouisfc/rate.png" alt=""/>
                    </span >
                      <div className="join__team1-star regular f_24">
                        <div className="join__team1-starking">
                          <img className="join__team1-starkingimg" src="img/saintlouisfc/king.png" alt=""/>
                        </div>
                        <div className="join__team1-starpeople">
                          <img className="join__team1-starpeopleimg" src="img/topbar/avt-user2.png" alt=""/>
                        </div>
                        <span>Philipp Lahm</span>
                      </div>
                      <div className="join__team1-player regular f_24 gr" >
                        <div className="join__team1-playerlogo">
                          <img className="join__team1-playerlogoimg" src="img/people.png" alt=""/>
                        </div>
                        <span className="">8 Players</span>
                      </div>
                  </div>
								<div className="bold match-vs f_48">vs</div>
                  <div className="join__team2"> 
                    <div className="join__team1-logo">
                      <img className="join__team2-logoimg" src="img/zigvylogo/zigvy.png" alt=""/>
                    </div>
                    <span className="join__team1-name regular f_42" >
                      Zigvy Soccer Club
                    </span>
                    <span className="join__team1-rate">
                      <img className="join__team1-rateimg" src="img/saintlouisfc/rate.png" alt=""/>
                    </span >
                      <div className="join__team1-star regular f_24">
                        <div className="join__team1-starking">
                          <img className="join__team1-starkingimg" src="img/saintlouisfc/king.png" alt=""/>
                        </div>
                        <div className="join__team1-starpeople">
                          <img className="join__team1-starpeopleimg" src="img/topbar/avt-user.png" alt=""/>
                        </div>
                        <span>Peter Parker<span className="g_4">( You )</span></span>
                      </div>
                      <div className="join__team1-player regular f_24 gr" >
                        <div className="join__team1-playerlogo">
                          <img className="join__team1-playerlogoimg" src="img/people.png" alt=""/>
                        </div>
                        <span className="">8 Players</span>
                      </div>
                  </div>
                </div>
								<div className="modal-content-match">
									<div className="modal-location">
										<div className="modal-location-left">
											<img src="img/modal-matchrequest/location.jpg" alt=""/>
										</div>
										<div className="modal-location-right">
											<div className="light location-title">Old Trafford Stadium</div>
											<div className="light location-info f_24">Sir Matt Busby Way, Stretford, Manchester M16 0RA, UK</div>
											<div className="modal-location-right-time">
													<div className="section-time-left">
															<span className="light gr">10</span>
													</div>

											</div>
										</div>
									</div>
								</div>
              </div>





								<div className="modal--footer">
									<div className="modal--footer-left">
										<div className="modal--footer-left-logo">
											<img src="img/modal-matchrequest/mess-footer.jpg" alt=""/>
										</div>
										<div className="modal--footer-left-link">
											<a className="regular f_24 gr" href="">Message Bayern Muchen</a>
											<span className="regular f_24 g_1">0 Unread</span>
										</div>
									</div>
									<div>
										<button type="button" className="modal-button regular text-uppercase font-large">Send Request</button>
									</div>
								</div>
							</div>
					</div>
			
		</div>
        );
    }
}
  
    export default Matchrequest;
