import React from 'react';


class Footer extends React.Component {
    render() {
      return (
          <footer className="footer__">
            <div className="footer__wraper">
              <div className="footer__wraper-left gr">
                <a className="footer__wraper-left-logo" href="">
                  <img className="footer__wraper-left-logoimg" src="/img/topbar/logo.png" alt=""/>
                </a>
                  <a className="gr footer__wraper-left-brand bold f_36" href="">FootballParty</a>
                <nav>
                  <ul className="footer__wraper-left-ul medium f_24">
                    <li className="footer__wraper-left-li">
                      <a className="g_4 footer__wraper-left-a" href="">Download App</a>
                    </li>
                    <li className="footer__wraper-left-li">
                      <a className="g_4 footer__wraper-left-a" href="">F.A.Q</a>
                    </li>
                    <li className="footer__wraper-left-li">
                      <a className="g_4 footer__wraper-left-a" href="">Support</a>
                    </li>
                    <li className="footer__wraper-left-li">
                      <a className="g_4 footer__wraper-left-a" href="">Feedback</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="footer__wraper-right">                 
                <a className="footer__wraper-rightdiv" href="">
                  <img className="footer__wraper-rightdiv-img" src="img/fooder/fb.png" alt=""/>
                </a>
                <a className="footer__wraper-rightdiv" href="">
                  <img className="footer__wraper-rightdiv-img" src="img/fooder/twi.png" alt=""/>
                </a>
                <a className="footer__wraper-rightdiv" href="">
                  <img className="footer__wraper-rightdiv-img" src="img/fooder/insta.png" alt=""/>
                </a>
              </div>
            </div>
            <p className="footer__wraper-copyright medium f_24 g_4">©2017 Zigvy Inc.</p>
          </footer>
        );
    }
}
  
	export default Footer;
