import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Step3 from './Step3';

const customStyles = {
  content : {
    top                   : '54%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '613px',
    maxHeight             : '567px',
    borderRadius          :0,
    padding: '0px'
  }
};



// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('body');


class Step2 extends React.Component {
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
    // references are now sync and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
      <button onClick={this.openModal} className="stp__2-btn regular f_28 wt">
      <span className="icon-next"></span>
      <span className="stp__2-btntext"> NEXT</span>
      </button>
      <Modal
         isOpen={this.state.modalIsOpen}
         onAfterOpen={this.afterOpenModal}
         onRequestClose={this.closeModal}
         style={customStyles}
         contentLabel="Example Modal"
         >
         <h2 ref={subtitle => this.subtitle = subtitle}></h2>
         <div className="stp2__">
            <p className="medium f_40"> Completed</p>
            <div className="stp2__logo icon-logostick"></div>
            <p className="stp2__logotext light f_48">Your Booking has been Issued!</p>
            <div className="join__location">
               <div className="join__location-left">
                  <div className="join__locationimg">
                     <img className="join__locationimgg" src="img/modal-matchrequest/location.jpg" alt=""/>
                  </div>
               </div>
               <div className="join__location-right">
                  <p className="join__location-righttitle regular f_28 gr">Old Trafford Stadium</p>
                  <p className="regular f_24 g_1">Sir Matt Busby Way, Stretford, Manchester M16 0RA, UK</p>
                  <div className="section__time">
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
               </div>
            </div>
            <div className="stp2__location">
               <div className="join__right regular f_24">
                  <button className="stp2__celendar">
                  <span className="icon-celendar"></span>
                  <a className="join__right- g_3" href="">Add to Calendar</a>
                  </button>  
                  <button className="stp2__share">
                  <span className="icon-share"></span>
                  <a className="join__right- g_3" href="">Share</a>
                  </button>
               </div>
            </div>
         </div>
         <div className="stp2__footer">
            <div className="stp2__footerwrap">
               <div>
                  <span className="icon-plus"></span>
                  <a href="" className="stp2__footertext regular f_28 gr">Invite a Team</a>
                  <p className="stp2__footertext2 regular f_24 gray">( You can do it later in your match management page )</p>
               </div>
               <div>
                  <Step3/>
               </div>
            </div>
         </div>
      </Modal>
   </div>
    );
  }
}

export default Step2;