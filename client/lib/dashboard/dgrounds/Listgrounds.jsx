import React from 'react';
import { Meteor } from 'meteor/meteor';

class Listgrounds extends React.Component {
  deleteThisGrounds() {
    console.log(this.props.ground._id);
    Meteor.call('grounds.remove', this.props.ground._id);
  }   
  updateThisGrounds(){
    this.props.handleEdit(this.props.ground);
  }

  render() {
    // console.log(this.props.ground.groundId);
      return (
        <tr>
            {/* Index */}
          <th scope="row">{this.props.index}</th> 
            {/* Username */}
          <td>{this.props.ground.username}</td>
            {/* Stadium */}
          <td>{this.props.ground.namesta}</td>
           {/* Content */}
           <td>{this.props.ground.content}</td>
            {/* Location */} 
          <td>{this.props.ground.location}</td>
            {/* Rating */} 
            <td>{this.props.ground.rating}</td>
            {/* Price */} 
            <td>${this.props.ground.price}</td>
             {/* Price */} 
          <td>{this.props.ground.status.toString()}</td>
          <td>
            <button type="button" className="matchs__btnsz btn-danger" onClick={this.updateThisGrounds.bind(this)}>Update</button>
            <button type="button" className="matchs__btnsz btn-warning" onClick={this.deleteThisGrounds.bind(this)}>Remove</button>
          </td>
        </tr>
        );
      }
    }
    export default (Listgrounds);
  