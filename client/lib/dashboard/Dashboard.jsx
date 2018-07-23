import React from 'react';
import { Link } from "react-router-dom";
import Grounds from './dgrounds/Grounds';

class Dashboard extends React.Component {
    render() {
      return (
    <div>
      <div className="dashboard header__">
          <div className="header__left">
              <div className="light f_70">
                <span>Dashboard ( 6 )</span>
              </div>
              {/* <div className="header__box">
                <div className="header__col-rating ">
                    <div className="input-group">
                      <select className="regular header__border f_24" ref="sortrate">
                      <option value="">Rating</option>
                          <option value="1" >✮</option>
                          <option value="2" >✮✮</option>
                          <option value="3" >✮✮✮</option>
                          <option value="4" >✮✮✮✮</option>
                          <option value="5" >✮✮✮✮✮</option>
                      </select>
                    </div>
                </div>
              </div> */}
          </div>
          <div className="header__right">
              <form className="padding padding-search form-inline" >
              <datalist id="matchs">
                <option value="Hanoi ACB"/>
                <option value="Arsenal"/>
                <option value="Barcelona"/>
              </datalist>
              </form>
              <input onChange={this.handleSearch} className="header__search regular f_22" list="matchs" type="search" placeholder=" Search dashboard..." ref="search" />
          </div>
        </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="medium f_32 nav-item active">
                <Link className="nav-link" to="/">Matchs <span className="sr-only">(current)</span></Link>
              </li>
              <li className="medium f_32 nav-item active">
                <Link className="nav-link" to="/">Ground <span className="sr-only">(current)</span></Link>
              </li>
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
              </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
              </li> */}
            </ul>
          {/* <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2 regular f_24" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0 regular f_24" type="submit">Search</button>
          </form> */}
        </div>
      </nav>
      <Grounds/>
    </div>
        );
      }
    }
  
    export default (Dashboard); 
  