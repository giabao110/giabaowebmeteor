import React from 'react';
import { Link } from "react-router-dom";
import ReadMoreReact from 'read-more-react';


class Grounds extends React.Component {

    render() {
      var day = this.props.grounds.createdAt;
      console.log();
      return (
        <div className="sectionground-group">
          <Link to={`/Grounddetail/${this.props.grounds._id._str}`} className="sectionground-img">
            <img className="sectionground-imgg" src={this.props.grounds.image} alt=""/>
            {/* 
            <p>{moment(this.props.grounds.createdAt).format('dddd')}</p>
            */}
            <div className="sectionground-content">
              <div className="sectionground-content-title regular">
                <span className="f_34 g_3">{this.props.grounds.namesta}</span>
              </div>
            <div className="sectionground-content-info">
              <div className="sectionground-location f_24 g_1">
                <ReadMoreReact text={this.props.grounds.location}
                  min={80}
                  ideal={100}
                  max={200} />
              </div>
              <div className="sectionground-content-right">
                <span className="f_36 gr">${this.props.grounds.price}.00</span>
                <span id="hour" className="f_20 gr">/hour</span>
              </div>
            </div>
          </div>
        </Link>
        </div>
        );
      }
    }
  
    export default (Grounds); 
  