import React from 'react';


class HanoiACB extends React.Component {
    render() {
      return (
        <form action="" className="select-form">
            <div className="section-form-above">
                <div className="section-form-above-left">
                    <div><img src="img/hanoiacb/avt.png" alt="" id="img-above-left1"/></div>
                    <div><img src="img/saintlouisfc/rate.png" alt="" id="img-above-left2"/></div>
                </div>
                <div className="section-form-above-right">
                    <div className="ubutu-regular-font" id="section-title">
                        Hanoi ACB
                    </div>
                    <div className="ubutu-regular-font" id="section-stadium">
                        <img src="img/saintlouisfc/logofootball.png" alt=""/>
                        <span>Old Trafford Stadium</span>
                    </div>
                    <div className="section-time">
                        <div className="section-time-left">
                            <div className="ubutu-light-font">10</div>
                        </div>
                        <div className="ubutu-regular-font section-time-right">
                            <div className="info">
                                <div id="day">
                                    <div>Monday</div>
                                    <div>Oct 2017</div>
                                </div>
                                <div id="from">
                                    <div>From:</div>
                                    <div>To:</div>
                                </div>
                                <div id="time">
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
                    <span className="ubutu-regular-font" id="haonguyenname">Hao Nguyen</span>
                </div>
                <div className="section-form-below-center">
                    <div><img src="img/people.png" alt="" id="people"/></div>
                    <div className="ubutu-regular-font" id="players">8 Players</div>
                </div>
               
            </div>
        </form>
        );
    }
}
  
    export default HanoiACB;
