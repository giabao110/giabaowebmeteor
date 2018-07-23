import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

export default class Insertground extends React.Component {
  InsertThisGrounds(event){
    event.preventDefault();

    // GET VALUE
    const name =  ReactDOM.findDOMNode(this.refs.names).value.trim();
    const location =  ReactDOM.findDOMNode(this.refs.location).value.trim();
    const price =  ReactDOM.findDOMNode(this.refs.price).value.trim();
    const rating =  ReactDOM.findDOMNode(this.refs.rating).value;
    const hoursfree =  ReactDOM.findDOMNode(this.refs.hoursfree).value.trim();
    const status =  ReactDOM.findDOMNode(this.refs.status).value;
    const img =  ReactDOM.findDOMNode(this.refs.img).value.trim();

    Meteor.call('grounds.insert',name.toString(),location,price,rating,hoursfree,img,status,);

    console.log(name);
    console.log(location);
    console.log(price);
    console.log(rating);
    console.log(hoursfree);
    console.log(status);
    console.log(img);
    // ReactDOM.findDOMNode(this.refs.names).value = '';
  }  

  render() {
      return (
        <div>
          <div className="header__">
            <div className="header__left">
                <div className="light f_70">
                  <span>Insert Grounds</span>
                </div>
            </div>
          </div>
          <br/>
          <form className="regular f_24 frm_grounds" onSubmit={this.InsertThisGrounds.bind(this)}>
              <div className="form-row">
                <div className="col-md-4 mb-3">
                  <label>Name Stadium</label>
                  <input type="text" className="form-control" ref="names" placeholder="Name Stadium"/>
                </div>
                <div className="col-md-4 mb-3">
                  <label >Location</label>
                  <input type="text" className="form-control" ref="location" placeholder="Location" />
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-4 mb-3">
                  <label >URL image</label>
                  <input type="text" className="form-control" ref="img" placeholder="URL image" />
                </div>
                <div className="col-md-4 mb-3">
                  <label >Username</label>
                  <input type="text" className="form-control" id="validationServer02" placeholder="Username" />
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-3 mb-3">
                  <label >Price</label>
                  <input type="text" className="form-control" ref="price" placeholder="Price" />
                </div>
                <div className="col-md-1 mb-1">
                  <label >Hour</label>
                  <input type="text" className="form-control" ref="hoursfree" placeholder="Hour" />
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-1 mb-1">
                  <label >Rating</label>
                  <select type="text" className="form-control" ref="rating" required>
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                  </select>
                </div>
                <div className="col-md-2 mb-2">
                  <label >Status</label>
                  <select type="text" className="form-control" ref="status" required>
                    <option value="true">On</option>
                    <option value="false">Off</option>
                  </select>
                </div>
              </div>
              <button className="matchs__btnsz btn-primary" type="submit">Insert</button>
          </form>
        </div>
        );
      }
    }
        