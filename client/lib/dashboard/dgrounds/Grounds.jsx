import React from 'react';
import { Link } from "react-router-dom";
import Listgrounds from "./Listgrounds";
import { withTracker } from 'meteor/react-meteor-data';
import { GroundsCol } from '../../../../imports/api/grounds';
import Insertground from './Insertground';

class Grounds extends React.Component {
  renderListmatchs() {
    return this.props.grounds.map((ground, index) => (
      <Listgrounds key={index} ground={ground} index={index} />
      ));
    }
      render() {
      return (
     <div>
       <table className="regular f_24 table table-dark">
        <thead>
          <tr className="bold f_24">
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Stadium</th>
            <th scope="col">Location</th>
            <th scope="col">Rating</th>
            <th scope="col">Price</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
          <tbody>
            {this.renderListmatchs()}
          </tbody>
        </table>  
        <Insertground/>
    </div>
        );
      }
    }
    export default withTracker(() => {
      return {
        grounds: GroundsCol.find({}, { sort: { createdAt: 1 } }).fetch(),
      };
    })(Grounds);
  