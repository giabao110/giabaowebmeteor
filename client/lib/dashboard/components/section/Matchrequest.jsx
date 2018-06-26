import React from 'react';
import '/node_modules/bootstrap';

class Matchrequest extends React.Component {
    render() {
      return (
        <div className="section-modal modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-custom modal-content">
								<div className="modal-content-title">
								<div className="ubutu-medium-font ">Upcoming Match</div>
								<div className="modal-content-title-right ubutu-regular-font font-small">
								<div id="celendar">
										<button className="modal-button-social">
										<img src="img/matchrequest/forma.png" alt=""/>
										<span>Add to Calendar</span>
										</button>  
										</div>
										<div id="share">
										<button className="modal-button-social">  
												<img src="img/matchrequest/formb.png" alt=""/>
												<span>Share</span>
										</button>
										</div>
								</div> 
								</div>

								<div className="modal-content-match">
								<div className="modal-content-match-team1"> 
										<img id="logo" src="img/bayernmuchen/avt.png" alt=""/>
										<div className="ubutu-regular-font" id="name">
											Bayern Muchen 
										</div>
										<div id="rate">
											<img src="img/saintlouisfc/rate.png" alt=""/>
										</div>
										<div className="ubutu-regular-font font-small" id="king1">
											<img id="king1" src="img/saintlouisfc/king.png" alt=""/>
											<img id ="user1" src="img/topbar/avt-user2.png" alt=""/>
											<span>Philipp Lahm</span>
										</div>
										<div className="ubutu-regular-font match-people1 font-small" >
											<img src="img/people.png" alt=""/>
											<span>8 Players</span>
										</div>
								</div>
								<div className="ubutu-bold-font match-vs">vs</div>
										<div className="modal-content-match-team2"> 
												<img id="logo" src="img/zigvy.png" alt=""/>
												<div className="ubutu-regular-font" id="name">
														Zigvy Soccer Club
												</div>
												<div id="rate2">
														<img src="img/saintlouisfc/rate.png" alt=""/>
												</div>
												<div className="ubutu-regular-font font-small" id="king2">
														<img id="king2" src="img/saintlouisfc/king.png" alt=""/>
														<img id ="user2" src="img/topbar/avt-user.png" alt=""/>
														<span>Peter Parker <span className="font-small" id="user3">(You)</span></span>
												</div>
												<div className="ubutu-regular-font match-people2 font-small" >
														<img src="img/people.png" alt=""/>
														<span>8 Players</span>
												</div>
										</div>
								</div>
								<div className="modal-content-match">
									<div className="modal-location">
										<div className="modal-location-left">
											<img src="img/modal-matchrequest/location.jpg" alt=""/>
										</div>
										<div className="modal-location-right">
											<div className="ubutu-light-font location-title">Old Trafford Stadium</div>
											<div className="ubutu-light-font location-info font-small">Sir Matt Busby Way, Stretford, Manchester M16 0RA, UK</div>
											<div className="modal-location-right-time">
													<div className="section-time-left">
															<span className="ubutu-light-font green">10</span>
													</div>
												<div className="ubutu-regular-font section-time-right font-small">
													<div className="info">
														<div id="day">
																<div>Monday</div>
																<div>Oct 2017</div>
														</div>
														<div id="from">
																<div>From:</div>
																<div>To:</div>
														</div>
														<div id="time" className="green">
																<div>08:00am</div>
																<div>09:00am</div>
														</div>
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
											<a className="ubutu-regular-font font-small green" href="">Message Bayern Muchen</a>
											<span className="ubutu-regular-font font-small gray">0 Unread</span>
										</div>
									</div>
									<div>
										<button type="button" className="modal-button ubutu-regular-font text-uppercase font-large">Send Request</button>
									</div>
								</div>
							</div>
					</div>
			
		</div>
        );
    }
}
  
    export default Matchrequest;
