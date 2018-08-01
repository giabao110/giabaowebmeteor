import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Step2 from './Step2';

const customStyles = {
  content : {
    top                   : '54%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '900px',
    maxHeight             : '580px',
    borderRadius          :0,
    padding: '0px'
  }
  
};

Modal.defaultStyles.overlay.backgroundColor = 'rgb(0, 0, 0, 0.4)';

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('body');


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
      
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }


  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
      <button onClick={this.openModal} className="info__right-book regular f_28 wt">
      BOOKING NOW
      </button>
      <Modal
         isOpen={this.state.modalIsOpen}
         onAfterOpen={this.afterOpenModal}
         onRequestClose={this.closeModal}
         style={customStyles}
         contentLabel="Example Modal"
         >
         <h2 ref={subtitle => this.subtitle = subtitle}></h2>
         <div className="stp1__wrap">
            <p className="stp1__title bold f_40">Book your Match</p>
            <div className="stp1__ stp1__info">
               <div className="regular ">
                  <span className="f_28 gr">{this.props.name}</span>
                  <span className="f_24 g_6 stp1__infopadd">|</span>
                  <span className="f_24 g_6">{this.props.location}</span>
               </div>
               <div className="regular f_22">
               {this.props.month} {this.props.year}
               </div>
            </div>
            <div className="stp1_checker">
               <label className="checkbox">
               <input type="checkbox" id="checkbox_1"/>
               <label className="regular g_28" htmlFor="checkbox_1">Open Match</label>
               </label>
            </div>
         </div>
         <div className="stp1_foot">
            <div className="stp1_foot-left">
               <span className="icon-question"></span>
               <div>
                  <p className="italic f_24">Select “Open Match” to get your match available for other teams to join.</p>
                  <p className="italic f_24">You can also join an someone’s Openning Match.</p>
               </div>
            </div>
            <div className="stp1__time">
               <div className="section__time-number light f_60 gr">{this.props.date}</div>
               <div className="section__time-day regular f_24"> 
                  <span className="section__time-dayabv">{this.props.day}</span>
                  <span className="section__time-daybl">{this.props.month} {this.props.year}</span>
               </div>
               <div className="section__time-from regular f_24">
                  <span className="section__time-dayabv">From:</span>
                  <span className="section__time-dayabv">To:</span>
               </div>
               <div className="regular f_24 gr">
                  <span className="section__time-dayabv">{this.props.starttime}</span>
                  <span className="section__time-dayabv">{this.props.endtime}</span>
               </div>
            </div>
            <div className="stp1_foot-right">
               <Step2 name={this.props.name} 
                      location={this.props.location} 
                      team={this.props.team}
                      day = {this.props.day}
                      date = {this.props.date}
                      month = {this.props.month}
                      year = {this.props.year}
                      starttime = {this.props.starttime}
                      endtime = {this.props.endtime}
                      players = {this.props.players}
                      dayop = {this.props.dayop}
                      rating = {this.props.rating}
                      />
            </div>
         </div>
      </Modal>
   </div>
    );
  }
}

export default App;