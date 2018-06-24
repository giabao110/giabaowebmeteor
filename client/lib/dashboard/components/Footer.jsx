import React from 'react';


class Footer extends React.Component {
    render() {
      return (
            <div>
                            <div className="footer-wraper">
                <div className="football-wraper-left">
                   <div>
                   <img className="footer-logo-brand" src="/img/topbar/logo.png" alt=""/>
                      <span className="footer-logo-color ubutu-bold-font">Football</span>
                      <span className="footer-logo-color ubutu-bold-font">Party</span>
                   </div>
                 
                       <nav className="footer-wraper-left-nav ubutu-medium-font">
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
            <span className="ubutu-medium-font copyright">©2017 Zigvy Inc.</span>
            </div>
            );
        }
    }
  
	export default Footer;
