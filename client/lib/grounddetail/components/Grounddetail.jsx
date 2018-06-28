import React from 'react';
import Dashboard from '../../dashboard/dashboard';

class Grounddetail extends React.Component {
    render() {
      return (
        <div>
          <div className="headerground">
            <div className="headerground__back">
              <a href="">
                <img className="headerground__back-img" src="./img/grounddetail/grounddetail-home/back.png" alt=""/> 
              </a>
            </div>
              <title className="headerground__back-title light f_70">Ground Info</title>
          </div>
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
                  <button className="info__right-book regular f_28">BOOKING NOW</button>
                  <div className="info__right-farvo regular f_24">
                    <img className="info__right-farvo-img" src="./img/grounddetail/grounddetail-home/farvo.png" alt=""/>
                      <a className="info__right-farvo-img-p g_3" href="">
                        <p>Farvorite</p>
                      </a>
                  </div>
                  <div className="info__right-share regular f_24">
                    <img className="info__right-share-img" src="./img/grounddetail/grounddetail-home/share.png" alt=""/>
                      <a className="info__right-farvo-img-p g_3" href="">
                        <p className="g_3">Share</p>
                      </a>
                  </div>
                </div>
              <p className="info__right-hour regular f_22 gr"><span className="f_36">4</span> hours <span className="g_4">Available Today</span></p>
            </div>
          </div>
          <div className="headerground__layout">
            <div className="info__left">
              <div className="headerground__title">
                <span className="regular f_40">Comments & Reviews <span className="headerground__title-count f_24 g_3">( 4 )</span></span>
              </div>
              <div className="headerground-wrap">

                <div className="headerground__comment">
                  <div className="headerground__comment-user">
                    <img className="headerground__comment-user-img" src="./img/grounddetail/grounddetail-home/ronaldo.png" alt=""/>
                  </div>
                  <div className="headground__comment-right">
                    <div className="headerground__comment-name">
                      <span className="bold f_26">Cristiano Ronaldo</span>
                      <img className="headerground__comment-name-img" src="./img/saintlouisfc/rate.png" alt=""/>
                    </div>
                    <p className="headerground__comment-team regular f_22 g_2">Real Madrid</p>
                    <div className="headerground__comment-content regular f_24">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
                    no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>
                  </div>
                </div>

                <div className="headerground__comment">
                  <div className="headerground__comment-user">
                    <img className="headerground__comment-user-img" src="./img/grounddetail/grounddetail-home/messi.png" alt=""/>
                  </div>
                  <div className="headground__comment-right">
                    <div className="headerground__comment-name">
                      <span className="bold f_26">Lionel Messi</span>
                      <img className="headerground__comment-name-img" src="./img/grounddetail/grounddetail-home/rate1.png" alt=""/>
                    </div>
                    <p className="headerground__comment-team regular f_22 g_2">FC Barcelona</p>
                    <div className="headerground__comment-content regular f_24">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
                    no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>
                  </div>
                </div>

                <div className="headerground__comment">
                  <div className="headerground__comment-user">
                    <img className="headerground__comment-user-img" src="./img/grounddetail/grounddetail-home/messi.png" alt=""/>
                  </div>
                  <div className="headground__comment-right">
                    <div className="headerground__comment-name">
                      <span className="bold f_26">Lionel Messi</span>
                      <img className="headerground__comment-name-img" src="./img/grounddetail/grounddetail-home/rate1.png" alt=""/>
                    </div>
                    <p className="headerground__comment-team regular f_22 g_2">FC Barcelona</p>
                    <div className="headerground__comment-content regular f_24">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
                    no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>
                  </div>
                </div>

                <div className="headerground__comment">
                  <div className="headerground__comment-user">
                    <img className="headerground__comment-user-img" src="./img/grounddetail/grounddetail-home/umtiti.png" alt=""/>
                  </div>
                  <div className="headground__comment-right">
                    <div className="headerground__comment-name">
                      <span className="bold f_26">Samuel Umtiti</span>
                      <img className="headerground__comment-name-img" src="./img/grounddetail/grounddetail-home/rate35.png" alt=""/>
                    </div>
                    <p className="headerground__comment-team regular f_22 g_2">FC Barcelona</p>
                    <div className="headerground__comment-content regular f_24">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
                    no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="info__right">
              <div className="headerground__title">
                  <span className="regular f_40">History <span className="headerground__title-count f_24 g_3">( 2 )</span></span>
              </div>
              <div className="headerground-wrap">
                <div className="headerground__history">
                    <div className="headerground__history-logo">
                      <img className="headerground__history-img" src="./img/grounddetail/grounddetail-home/champion.png" alt=""/>
                    </div>
                    <div className="headerground__history-content">
                      <span className="headerground__history-content-name bold f_30">Champions League</span>
                      <span className="headerground__history-content-day regular f_22 g_2">05 Oct 2017</span>
                      <span className="headerground__history-content-teams regular f_24 g_2"><span className="gr">12</span> Teams</span>
                      <span className="headerground__history-content-players regular f_24 g_2"><span className="gr">202</span> Players</span>
                    </div>
                </div>

                  <div className="headerground__history">
                    <div className="headerground__history-logo">
                      <img className="headerground__history-img" src="./img/grounddetail/grounddetail-home/league.png" alt=""/>
                    </div>
                    <div className="headerground__history-content">
                      <span className="headerground__history-content-name bold f_30">English Football League</span>
                      <span className="headerground__history-content-day regular f_22 g_2">22 Aug 2017</span>
                      <span className="headerground__history-content-teams regular f_24 g_2"><span className="gr">72</span> Teams</span>
                      <span className="headerground__history-content-players regular f_24 g_2"><span className="gr">202</span> Players</span>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  
	export default Grounddetail; 
