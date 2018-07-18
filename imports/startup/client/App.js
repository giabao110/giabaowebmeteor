import React from 'react';
import  Navigation from '../../../client/lib/components/Navigation';
import  Footer from '../../../client/lib/components/Footer';

class App extends React.Component {
  render() {
    return(
      <div>
        <Navigation count={this.props.incompleteCount}/>
          <div className="football__wraper">
            {this.props.body}
          <Footer/>
        </div>
      </div>
    );
    }
  } 
export default (App);
