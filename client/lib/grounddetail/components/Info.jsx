import React from 'react';
import Step1 from './Step1';

class Info extends React.Component {
    render() {
      return (
      <div className="info">
        <div className="info__left">
           <img className="info__left-img" src="./img/grounddetail/grounddetail-home/main.jpg" alt=""/>
        </div>
        <div className="info__right">
           <title className="info__right-title medium f_60">Old Trafford Stadium</title>
           <p className="info__right-title-s regular f_24 g_1">Sir Matt Busby Way, Stretford Manchester M16 0RA, UK</p>
           <div className="info__right-rate-border">
              <img className="info__right-rate" src="img/saintlouisfc/rate.png" alt=""/>
           </div>
           <div className="info__content-about">
              <div className="info__right-user-div">
                 <img className="info__right-user" src="./img/topbar/avt-user.png" alt=""/>
              </div>
              <div className="info__right-name regular">
                 <p className="f_24" >Phuong Nguyen</p>
                 <p className="f_22 g_2" >Owner</p>
              </div>
           </div>
           <p className="info__right-content regular f_24">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
           <p className="info__right-price regular f_46 gr">$25.00<span className="info__right-price-s regular f_24 g_3">/hr</span></p>
           <div className="info__right-button">
              <Step1/>
              <div className="info__right-farvo regular f_24">
                 <span className="icon-farvo info__right-farvoicon"></span>
                 <a className="info__right-farvo-img-p g_3" href="">
                    <p>Farvorite</p>
                 </a>
              </div>
              <div className="info__right-share regular f_24">
                 <span className="icon-share info__right-farvoicon"></span>
                 <a className="info__right-farvo-img-p g_3" href="">
                    <p className="g_3">Share</p>
                 </a>
              </div>
           </div>
           <p className="info__right-hour regular f_22 gr"><span className="f_36">4</span> hours <span className="info__right-hours g_4">Available Today</span></p>
        </div>
     </div>
      );
    }
  }
  
	export default Info; 
