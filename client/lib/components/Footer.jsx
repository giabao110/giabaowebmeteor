import React from 'react';
import { Link } from "react-router-dom";


class Footer extends React.Component {
    render() {
      return (
        <footer className="footer">
          <div className="footer__">
            <nav className="footer__left gr">
              <Link to="/" className="footer__left-logo" href=""><span className="icon-brand"></span></Link>
              <Link to="/" className="footer__left-brand gr bold f_36" href="">FootballParty</Link>
              <ul className="footer__left-ul medium f_24">
                <li className="footer__left-li">
                  <Link to="/" className="g_4 footer__left-a" href="">Download App</Link>
                </li>
                <li className="footer__left-li">
                  <Link to="/" className="g_4 footer__left-a" href="">F.A.Q</Link>
                </li>
                <li className="footer__left-li">
                  <Link to="/" className="g_4 footer__left-a" href="">Support</Link>
                </li>
                <li className="footer__left-li">
                  <Link to="/" className="g_4 footer__left-a" href="">Feedback</Link>
                </li>
              </ul>
            </nav>
            <div className="footer__right">                 
              <Link to="/" className="footer__rightlogo g_4" href="">
                <span className="icon-facebook"></span>
              </Link>
              <Link to="/" className="footer__rightlogo g_4" href="">
                <span className="icon-twitter"></span>
              </Link>
              <Link to="/" className="footer__rightlogo g_4" href="">
              <span className="icon-instagram"></span>
              </Link>
            </div>
          </div>
          <p className="footer__copyright medium f_24 g_4">©2017 Zigvy Inc.</p>
        </footer>
    );
  }
}
  
	export default Footer;
