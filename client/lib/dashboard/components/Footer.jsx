import React from 'react';


class Footer extends React.Component {
    render() {
      return (
          <div>
            <div>
              <div className="football-wraper-left">
                <div>
                  <img className="footer-logo-brand" src="/img/topbar/logo.png" alt=""/>
                  <span className="ubutu-bold-font font-large-36 green">Football</span>
                  <span className="ubutu-bold-font font-large-36 green">Party</span>
                </div>
                <nav className="footer-wraper-left-nav ubutu-medium-font font-small">
                  <ul>
                    <li id="Dow">Download App</li>
                    <li id="Dow">F.A.Q</li>
                    <li id="Dow">Support</li>
                    <li id="Dow">Feedback</li>
                  </ul>
                </nav>
              </div>
              <div className="football-wraper-right">
                <div className="social">
                  <div className="fb"><img src="img/fooder/fb.png" alt=""/></div>
                  <div className="twi"><img src="img/fooder/twi.png" alt=""/></div>
                  <div className="insta"><img src="img/fooder/insta.png" alt=""/></div>
                </div>
              </div>
            </div>
            <span className="ubutu-medium-font copyright font-small">©2017 Zigvy Inc.</span>
          </div>
        );
    }
}
  
	export default Footer;
