import React from 'react';


class Footer extends React.Component {
    render() {
      return (
        <footer className="footer">
          <div className="footer__">
            <nav className="footer__left gr">
              <a className="footer__left-logo" href=""><span className="icon-brand"></span></a>
              <a className="footer__left-brand gr bold f_36" href="">FootballParty</a>
              <ul className="footer__left-ul medium f_24">
                <li className="footer__left-li">
                  <a className="g_4 footer__left-a" href="">Download App</a>
                </li>
                <li className="footer__left-li">
                  <a className="g_4 footer__left-a" href="">F.A.Q</a>
                </li>
                <li className="footer__left-li">
                  <a className="g_4 footer__left-a" href="">Support</a>
                </li>
                <li className="footer__left-li">
                  <a className="g_4 footer__left-a" href="">Feedback</a>
                </li>
              </ul>
            </nav>
            <div className="footer__right">                 
              <a className="footer__rightlogo g_4" href="">
                <span className="icon-facebook"></span>
              </a>
              <a className="footer__rightlogo g_4" href="">
                <span className="icon-twitter"></span>
              </a>
              <a className="footer__rightlogo g_4" href="">
              <span className="icon-instagram"></span>
              </a>
            </div>
          </div>
          <p className="footer__copyright medium f_24 g_4">©2017 Zigvy Inc.</p>
        </footer>
    );
  }
}
  
	export default Footer;
