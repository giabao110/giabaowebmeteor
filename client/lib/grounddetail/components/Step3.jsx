import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '52%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '695px',
    height             : '636px',
    borderRadius          :0,
    padding: '0px'
  }
};

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
    // references are now sync and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
      <button onClick={this.openModal} className="stp__3-btn regular f_28 wt">
      <span className="icon-next"></span>
      <span className="stp__3-btntext"> FINISH</span>
      </button>
      <Modal
         isOpen={this.state.modalIsOpen}
         onAfterOpen={this.afterOpenModal}
         onRequestClose={this.closeModal}
         style={customStyles}
         contentLabel="Example Modal"
         >
         <h2 ref={subtitle => this.subtitle = subtitle}></h2>
         <div className="stp3__">
            <p className="medium f_40"> Completed</p>
            <div className="stp3__location">
               <div className="stp3_locationleft">
                  <p className="stp3_locationcontent regular f_28 gr">Old Trafford Stadium</p>
                  <p className="regular f_24 g_1">Stretford, Manchester </p>
               </div>
               <div className="stp3_locationright section__time">
                  <div className="stp3_location10 light f_60 gr">10</div>
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
            <hr className="sexy_line" />
            <form className="form-inline ">
               <input className="stp3__search italic f_22" type="search" placeholder="Search player or team..." aria-label="Search" />
            </form>
            <p className="stp3__suggest regular f_22 g_7">SUGGESTED TEAMS</p>
            <div className="stp3__teamwrap">
               <div className="stp3__teams">
                  <form className="stp3__teamsdiv" action="">
                     <div className="stp3__teamslogo">
                        <div className="stp3__teamsloogoimg">
                           <img className="stp3__teamsloogoimgg" src="img/step3/barca.png" alt=""/>
                        </div>
                     </div>
                     <div>
                        <p className="stp3__nameteams regular f_28 gr">FC Barcelona</p>
                        <p className="regular f_22 g_8">Arístides Maillol, 08028</p>
                     </div>
                     <div>
                        <span className="stp3__stick icon-stick"></span>
                     </div>
                  </form>
                  <form className="stp3__teamsdiv" action="">
                     <div className="stp3__teamslogo">
                        <div className="stp3__teamsloogoimg">
                           <img className="stp3__teamsloogoimgg" src="img/step3/barca.png" alt=""/>
                        </div>
                     </div>
                     <div>
                        <p className="stp3__nameteams regular f_28 gr">FC Barcelona</p>
                        <p className="regular f_22 g_8">Arístides Maillol, 08028</p>
                     </div>
                     <div>
                        <span className="stp3__stick icon-stick"></span>
                     </div>
                  </form>
               </div>
               <div className="stp3__teams">
                  <form className="stp3__teamsdiv" action="">
                     <div className="stp3__teamslogo">
                        <div className="stp3__teamsloogoimg">
                           <img className="stp3__teamsloogoimgg" src="img/step3/real.png" alt=""/>
                        </div>
                     </div>
                     <div>
                        <p className="stp3__nameteams regular f_28 gr">Real Madrid C.F.</p>
                        <p className="regular f_22 g_8">Avda. de Concha Espina </p>
                     </div>
                     <div>
                        <span className="stp3__stick icon-stick"></span>
                     </div>
                  </form>
                  <form className="stp3__teamsdiv" action="">
                     <div className="stp3__teamslogo">
                        <div className="stp3__teamsloogoimg">
                           <img className="stp3__teamsloogoimgg" src="img/step3/real.png" alt=""/>
                        </div>
                     </div>
                     <div>
                        <p className="stp3__nameteams regular f_28 gr">Real Madrid C.F.</p>
                        <p className="regular f_22 g_8">Avda. de Concha Espina </p>
                     </div>
                     <div>
                        <span className="stp3__stick icon-stick"></span>
                     </div>
                  </form>
               </div>
               <div className="stp3__teams">
                  <form className="stp3__teamsdiv" action="">
                     <div className="stp3__teamslogo">
                        <div className="stp3__teamsloogoimg">
                           <img className="stp3__teamsloogoimgg" src="img/step3/zigvy.png" alt=""/>
                        </div>
                     </div>
                     <div>
                        <p className="stp3__nameteams regular f_28 gr">Zigvy Soccer Club</p>
                        <p className="regular f_22 g_8">Phu Nhuan, HCM</p>
                     </div>
                     <div>
                        <span className="stp3__stick icon-stick"></span>
                     </div>
                  </form>
                  <form className="stp3__teamsdiv" action="">
                     <div className="stp3__teamslogo">
                        <div className="stp3__teamsloogoimg">
                           <img className="stp3__teamsloogoimgg" src="img/step3/zigvy.png" alt=""/>
                        </div>
                     </div>
                     <div>
                        <p className="stp3__nameteams regular f_28 gr">Zigvy Soccer Club</p>
                        <p className="regular f_22 g_8">Phu Nhuan, HCM</p>
                     </div>
                     <div>
                        <span className="stp3__stick icon-stick"></span>
                     </div>
                  </form>
               </div>
            </div>
         </div>
         <div></div>
         <div className="stp2__footer">
            <div className="stp2__footerwrap">
               <div className="stp3__footerwrap">
                  <span className="icon-cancel"></span>
                  <a onClick={this.closeModal} href="" className="stp2__footertext regular f_28 gr">Cancel</a>
               </div>
               <div>
                  <button onClick={this.closeModal} className="stp3__footerbtn regular f_28 wt">
                  <span className="icon-next"></span>
                  <span className="stp__2-btntext"> Send Invite </span>
                  </button>
               </div>
            </div>
         </div>
      </Modal>
   </div>
    );
  }
}

export default App;

$(document).ready(function(){
  $("#hide").hover(function(){
      $("#showra").hide();
  });
  $("#show").hover(function(){
      $("#showra").show();
  });
});