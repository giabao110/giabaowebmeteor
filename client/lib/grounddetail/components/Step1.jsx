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
                  <span className="f_28 gr">Old Trafford Stadium </span>
                  <span className="f_24 g_6 stp1__infopadd">|</span>
                  <span className="f_24 g_6">Sir Matt Busby Way, Stretford, Manchester M16 0RA, UK</span>
               </div>
               <div className="regular f_22">
                  October 2017
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
               <div className="section__time-number light f_60 gr">10</div>
               <div className="section__time-day regular f_24"> 
                  <span className="section__time-dayabv">Monday</span>
                  <span className="section__time-daybl">Oct 2017</span>
               </div>
               <div className="section__time-from regular f_24">
                  <span className="section__time-dayabv">From:</span>
                  <span className="section__time-dayabv">To:</span>
               </div>
               <div className="regular f_24 gr">
                  <span className="section__time-dayabv">08:00am</span>
                  <span className="section__time-dayabv">09:00am</span>
               </div>
            </div>
            <div className="stp1_foot-right">
               <Step2 ></Step2>
            </div>
         </div>
      </Modal>
   </div>
    );
  }
}

export default App;