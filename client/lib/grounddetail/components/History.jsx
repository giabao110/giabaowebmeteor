import React from 'react';

class History extends React.Component {
    render() {
      return (
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
      );
    }
  }
  
	export default History; 
