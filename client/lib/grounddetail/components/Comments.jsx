import React from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';
import { CommentCol } from '../../../../imports/api/comments';
import { GroundsCol } from '../../../../imports/api/grounds';

import Text from './Text';

class Comments extends React.Component {
  renderComments() {
    return this.props.comments.map((grounds) => (
      <Text key={grounds._id} comment={grounds} />
    ));
  }  
  handleSubmit(event) {
    event.preventDefault();
 
    // Find the text field via the React ref
    const comment_body = ReactDOM.findDOMNode(this.refs.inputComment).value.trim();
 
    CommentCol.insert({
     author:"Cristiano Ronaldo",
     comment_body,
     fbteam:"Real Madrid",
     img:"http://www.one-versus-one.com/img/rounds/avatar-round-ronaldo.png"
    });
 
    // Clear form
    ReactDOM.findDOMNode(this.refs.inputComment).value = '';
  }

  render() {
      return (
        <div className="info__left">
        <div className="headerground__title">
           <span className="regular f_40">Comments & Reviews <span className="headerground__title-count f_24 g_3">( {this.props.incompleteCount} )</span></span>
        </div>
        <div className="headerground-wrap">
          {this.renderComments()}
          <hr className="sexy_linee"/>
          <form className="headerground__form" onSubmit={this.handleSubmit.bind(this)}>
            <input className="headerground__comment_input italic f_24" placeholder="Type your comment here ..." ref="inputComment"/>  
            <button className="headerground__comment_btn regular f_24">Send</button>
          </form>
        </div>
     </div>
      );
    }
  }
  
  export default withTracker(() => {
    return {
      comments: CommentCol.find({}, { sort: { createdAt: -1 } }).fetch(),
      incompleteCount: CommentCol.find({ checked: { $ne: true } }).count(),
    };
  })(Comments);

