import React from 'react';
import ReactDOM from 'react-dom';

class Headergrounds extends React.Component {
  handleSearch = (event)=>{
    event.preventDefault();
    const text = ReactDOM.findDOMNode(this.refs.search).value.trim();
    this.props.onClickSearchGo(text);
  }

  handleSortRate(event){
    event.preventDefault();
    const rate = ReactDOM.findDOMNode(this.refs.sortrate).value;
    this.props.onClickSortRate(rate);
  }
    render() {
      return (
          <div className="header__">
          <div className="header__left">
              <div className="light f_70">
                <span>Grounds</span>
              </div>
              <div className="header__box">
                <div className="header__col-nearest ">
                    <div className="input-group">
                      <select className="regular header__border f_24">
                          <option value="1">Nearest</option>
                          <option value="2">Nearest</option>
                          <option value="3">Nearest</option>
                      </select>
                    </div>
                </div>
                <div className="header__col-rating ">
                    <div className="input-group">
                      <select className="regular header__border f_24" ref="sortrate" onChange={this.handleSortRate.bind(this)}>
                      <option value="">Rating</option>
                          <option value="1" >✮</option>
                          <option value="2" >✮✮</option>
                          <option value="3" >✮✮✮</option>
                          <option value="4" >✮✮✮✮</option>
                          <option value="5" >✮✮✮✮✮</option>
                      </select>
                    </div>
                </div>
                <div className="header__col-rating ">
                    <div className="input-group">
                      <select className="regular header__border f_24">
                          <option value="1">Available Only</option>
                          <option value="2">Available Only</option>
                          <option value="3">Available Only</option>
                      </select>
                    </div>
                </div>
              </div>
          </div>
          <div className="header__right">
              <form className="padding padding-search form-inline" >
              <datalist id="matchs">
                <option value="Hanoi ACB"/>
                <option value="Arsenal"/>
                <option value="Barcelona"/>
              </datalist>
              </form>
              <input onChange={this.handleSearch} className="header__search regular f_22" list="matchs" type="search" placeholder=" Search Ground..." ref="search" />
          </div>
        </div>
					);
				}
			}
  
	export default Headergrounds;
