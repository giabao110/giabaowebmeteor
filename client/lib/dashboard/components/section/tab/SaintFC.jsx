import  React from 'react';
import  '/node_modules/bootstrap';
import	Matchrequest from '../Matchrequest';

class SaintFC extends React.Component {
    render() {
      return (
        <div>
          <form action="" className="select-form">
              <div className="section-form-above">
                  <div className="section-form-above-left">
                      <div><img src="img/saintlouisfc/logo.png" alt="" id="img-above-left1"/></div>
                      <div><img src="img/saintlouisfc/rate.png" alt="" id="img-above-left2"/></div>
                  </div>
									<div className="section-form-above-right">
											<div className="ubutu-regular-font font-large-34" id="section-title">
													Saint Louis FC
											</div>
											<div className="ubutu-regular-font font-small" id="section-stadium">
													<img src="img/saintlouisfc/logofootball.png" alt=""/>
													<span>Old Trafford Stadium</span>
											</div>
										<div className="section-time">
											<div className="section-time-left font-large-60">
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
						<div className="section-form-below">
								<div className="section-form-below-left">
										<span id="king"><img src="img/saintlouisfc/king.png" alt="" /></span>
										<span id="haonguyen"><img src="img/saintlouisfc/haonguyen.png" alt=""/></span>
										<span className="ubutu-regular-font font-small" id="haonguyenname">Hao Nguyen</span>
								</div>
								<div className="section-form-below-center">
										<div><img src="img/people.png" alt="" id="people"/></div>
										<div className="ubutu-regular-font green font-small">8 Players</div>
								</div>

								<div className="section-form-below-right">
										<button type="button" className="section-button ubutu-regular-font text-uppercase font-small" data-toggle="modal" data-target="#exampleModalLong">join</button>
								</div>
						</div>
          </form>
						<Matchrequest/>
        </div>
        );
    }
}
  
    export default SaintFC;
