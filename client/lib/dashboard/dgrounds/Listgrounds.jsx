import React from 'react';
import { Meteor } from 'meteor/meteor';

class Listgrounds extends React.Component {
  deleteThisGrounds() {
    console.log(this.props.ground._id);
    Meteor.call('grounds.remove', this.props.ground._id);
  }   
  render() {
    // console.log(this.props.ground.groundId);
      return (
        <tr>
          <th scope="row">{this.props.index}</th>
          <td>""</td>
        
          <td>{this.props.ground.location}</td>
          <td>""</td>
          <td>${this.props.ground.price}</td>
          <td>{this.props.ground.namesta}</td>
          <td>
            <button type="button" className="matchs__btnsz btn-danger">Update</button>
            <button type="button" className="matchs__btnsz btn-warning" onClick={this.deleteThisGrounds.bind(this)}>Remove</button>
          </td>
        </tr>
        );
      }
    }
    export default (Listgrounds);

    // export default withTracker(() => {
    //   return {
    //     matchs: MatchsCol.find({}, { sort: { createdAt: -1 } }).fetch(),
    //   };
    // })(Section);
  