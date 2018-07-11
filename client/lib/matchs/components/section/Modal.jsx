import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '55%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    maxWidth                 : '614px',
    maxHeight                : '655px',
    borderRadius          :0,
    padding: '0px'
  }
  
};

Modal.defaultStyles.overlay.backgroundColor = 'rgb(0, 0, 0, 0.7)';

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
   <button className="section__blbtn regular f_24" onClick={this.openModal}>
   <span className="icon-down"></span>
   JOIN
   </button>
   <Modal
      isOpen={this.state.modalIsOpen}
      onAfterOpen={this.afterOpenModal}
      onRequestClose={this.closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      >
      <h2 ref={subtitle => this.subtitle = subtitle}></h2>
      <div className="join__">
         <div className="join__title">
            <div className="medium f_40">Upcoming Match</div>
            <div className="join__right regular f_24">
               <button className="join__right-celendar">
               <span className="icon-celendar"></span>
               <a className="join__right- g_3" href="">Add to Calendar</a>
               </button>  
               <button className="join__right-share">
               <span className="icon-share"></span>
               <a className="join__right- g_3" href="">Share</a>
               </button>
            </div>
         </div>
         <div className="join__body">
            <div className="join__match">
               <div className="join__team1">
                  <div className="join__team1-logo">
                     <img className="join__team1-logoimg" src="img/dashboard/bayernmuchen/avt.png" alt=""/>
                  </div>
                  <span className="join__team1-name regular f_42" >Bayern Muchen</span>
                  <span className="join__team1-rate">
                  <img className="join__team1-rateimg" src="img/dashboard/saintlouisfc/rate.png" alt=""/>
                  </span >
                  <div className="join__team1-star regular f_24">
                     <span className="icon-king"></span>
                     <span className="join__team1-starpeople">
                     <img className="join__team1-starpeopleimg" src="img/topbar/avt-user2.png" alt=""/>
                     </span>
                     <span>Philipp Lahm</span>
                  </div>
                  <div className="join__team1-player regular f_24 gr" >
                     <span className="icon-people"></span>
                     <span className="join__team1-playerr">8 Players</span>
                  </div>
               </div>
               <div className="bold match-vs f_48">vs</div>
               <div className="join__team1">
                  <div className="join__team1-logo">
                     <img className="join__team1-logoimg" src="img/zigvylogo/zigvy.png" alt=""/>
                  </div>
                  <span className="join__team1-name regular f_42" >Zigvy Soccer Club</span>
                  <span className="join__team1-rate">
                  <img className="join__team1-rateimg" src="img/dashboard/saintlouisfc/rate.png" alt=""/>
                  </span >
                  <div className="join__team1-star regular f_24">
                     <span className="icon-king"></span>
                     <span className="join__team1-starpeople">
                     <img className="join__team1-starpeopleimg" src="img/topbar/avt-user.png" alt=""/>
                     </span>
                     <span>Peter Parker<span className="join__team1-starpeoplee g_4">( You )</span></span>
                  </div>
                  <div className="join__team1-player regular f_24 gr" >
                     <span className="icon-people"></span>
                     <span className="join__team1-playerr">8 Players</span>
                  </div>
               </div>
            </div>
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
         </div>
         <div className="join__footer">
            <div className="join__footer-left">
               <a href="" className="icon-messenger"></a>
               <div className="join__footer-link">
                  <a className="regular f_28 gr" href="">Message Bayern Muchen</a>
                  <p><a className="regular f_28 gray" href="">0 Unread</a></p>
               </div>
            </div>
            <div>
               <button onClick={this.closeModal} type="button" className="join__button regular f_32">Send Request</button>
            </div>
         </div>
      </div>
   </Modal>
</div>
    );
  }
}

export default App;