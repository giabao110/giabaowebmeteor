import React from 'react';
import Rate from '../../components/Rating';

export default class Text extends React.Component {
    render() {
      return (
        <div className="headerground__comment">
        <div className="headerground__comment-user">
           <img className="headerground__comment-user-img" src={this.props.comment.img} alt=""/>
        </div>
        <div className="headground__comment-right">
           <div className="headerground__comment-name">
              <span className="bold f_26">{this.props.comment.author}</span>
              <span className="headerground__rate">
                <Rate rate={this.props.comment.rate}/>  
              </span>
           </div>
           <p className="headerground__comment-team regular f_22 g_2">{this.props.comment.fbteam}</p>
           <p className="headerground__comment-content regular f_24">{this.props.comment.comment_body}</p>
        </div>
      </div>
      );
    }
  }
  