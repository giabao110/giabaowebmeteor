import React from 'react';
import { Link } from "react-router-dom";


class Login extends React.Component {
      render() {
      return (
      <div>
         <div className="nav">
          <div className="football__wraper">
            <div className="nav__wrap">
              <nav className="nav__items">
                <div>
                  <span className="icon-brand"></span>
                  <Link to="/" className="nav__logo-brand-name regular f_36" href="/">Football<span className="bold">Party</span></Link>
                </div>
                <form className="padding padding-search form-inline ">    
                  <input className="nav__search regular f_22" type="search" placeholder="Search ground, team or someone..." aria-label="Search" />
                </form> 
                <ul className="nav__links medium f_22"> 
                  <li><Link to="/home">Find Match</Link></li>
                  <li><Link to="/grounds">Grounds</Link></li>
                  {/* <li><Link to="/grounds">Messages</Link></li> */}
                  <li><Link to="/dashboard">Dashboard</Link></li>
                  <li><Link to="/">Upcoming</Link></li>
                  {/* <span className="regular f_20 ">{this.props.incompleteCount}</span> */}
                  {/* <div id="login-buttons" className="login-buttons-dropdown-align-">
                        <div className="login-link-and-dropdown-list login-form-sign-in">
                        <a className="login-link-text" id="login-sign-in-link">Sign in ▾</a>
                  </div>
                  </div> */}
                </ul>
              </nav>
            </div>
          </div>
        </div>
       <div className="bg-img">
          <form action="/action_page.php">
          <div className="football__wraper">
            <div className="contain">
              <h1 className="light f_70 wt">Login</h1>

              <label htmlFor="email" id="login-username-or-email-label-and-input" className="regular f_32 wt">Username</label>
              <input type="text" className="regular f_24" placeholder="Enter Email" name="email" required/>

              <label htmlFor="psw" id="login-password" className="regular f_32 wt">Password</label>
              <input type="password" className="regular f_24" placeholder="Enter Password" name="psw" required/>

              <button type="submit" id="login-buttons-password" className="btn regular f_32 wt">Login</button>

               <div className="login__">
                <span className="regular f_24  wt">Forgot Password</span>
                <span className="regular f_24  wt">Create Account</span>
              </div>
            </div>
          </div>
          </form>
        </div>
      </div>
      )
      }
    }
    export default (Login);
  