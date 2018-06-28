import  React from 'react';
import  '/node_modules/bootstrap';
import	Matchrequest from '../Matchrequest';

class SaintFC extends React.Component {
    render() {
      return (
        <div>
          <form action="" className="section__form">
              <div className="section__abv">
                <div className="section__abvleft">
                  <div className="section__abvleftdiv">
                    <img className="section__abv-leftimg" src="img/saintlouisfc/logo.png" alt="" />
                  </div>
                    <img className="section__abv-leftrate" src="img/saintlouisfc/rate.png" alt=""/>
                </div>
                <div className="section__formabv-right">
                  <p className="section__title regular f_34">
                      Saint Louis FC
                  </p>
                  <div className="section__stadium regular f_24">
                      <img className="section__stadiumimg" src="img/saintlouisfc/logofootball.png" alt=""/>
                      <span>Old Trafford Stadium</span>
                  </div>
                  <div className="section__time">
                    <div className="section__time-number light f_60 gr">10</div>
                    <div className="section__time-day regular f_24"> 
                      <span className="section__time-dayabv">Monday</span>
                      <span className="section__time-daybl">Oct 2017</span>
                    </div>
                    <div className="section__time-from regular f_24">
                      <span className="section__time-dayabv">From:</span>
                      <span className="section__time-dayabv">To:</span>
                    </div>
                    <div className="regular f_24 gr">
                      <span className="section__time-dayabv">08:00am</span>
                      <span className="section__time-dayabv">09:00am</span>
                    </div>
                  </div>
                </div>
              </div>
						<div className="section__bl">
              <div className="section__blleft">
                <span className="section__blleft-logo">
                  <img className="section__blleft-logoimg" src="img/saintlouisfc/king.png" alt="" />
                </span>
                <span className="section__blleft-user">
                  <img className="section__blleft-userimg" src="img/saintlouisfc/haonguyen.png" alt="" />
                </span>
                <span className="regular f_24">Hao Nguyen</span>
              </div>
              <div className="section__blright">
                <div className="section__blrightlg">
                  <img className="section__blrightlg-img" src="img/people.png" alt=""/>
                </div>
                  <span className="regular gr f_24">8 Players</span>
              </div>
                <button type="button" className="section__blbtn regular f_24" data-toggle="modal" data-target="#exampleModalLong">join</button>
						</div>
          </form>
          <Matchrequest/>
        </div>
      );
    }
  }
  
    export default SaintFC;
