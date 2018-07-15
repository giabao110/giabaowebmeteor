import 'rc-tabs/assets/index.css';
import React from 'react';
import Tabs, { TabPane } from 'rc-tabs/lib';
import TabContent from 'rc-tabs/lib/SwipeableTabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
import Section from './Section';
const PanelContent = ({ id }) => (
  <div>{[1, 2, 3, 4].map(item => <p key={item}>{id}</p>)}</div>
);
var day = new Date();
const today = day.getDate();

class Slider extends React.Component {

  state = {
    activeKey: '4',
    start: 0,
  };

  onChange = (activeKey) => {
    console.log(`onChange ${activeKey}`);
    this.setState({
      activeKey,
    });
  }

  onTabClick = (key) => {
    console.log(`onTabClick ${key}`);
    if (key === this.state.activeKey) {
      this.setState({
        activeKey: '',
      });
    }
  }

  tick = () => {
    this.setState({
      start: this.state.start + 10,
    });
  }

  render() {
    const start = this.state.start;
    return (
      <div>
       <hr className="sexy-line-cus" />
        <Tabs
          renderTabBar={() => <ScrollableInkTabBar onTabClick={this.onTabClick}/>}
          renderTabContent={() => <TabContent animatedWithMargin />}
          activeKey={this.state.activeKey}
          onChange={this.onChange}
          
        >
        
          <TabPane tab={1} key="1">
            <div>
              
          <Section/>
          </div>
          </TabPane>
          <TabPane tab={2} key="2">
          <Section/>
          </TabPane>
          <TabPane tab={3} key="3">
          <Section/>
          </TabPane>
          <TabPane tab={4} key="4">
          <Section/>
          </TabPane>
          <TabPane tab={5} key="5">
            
          </TabPane>
          <TabPane tab={6} key="6">
            
          </TabPane>
          <TabPane tab={7} key="7">
            
          </TabPane>
          <TabPane tab={8} key="8">
            
          </TabPane>
          <TabPane tab={9} key="9">
            
          </TabPane>
          <TabPane tab={10} key="10">
            
          </TabPane>
          <TabPane tab={11} key="11">
            
          </TabPane>
          <TabPane tab={12} key="12">
            
          </TabPane>
          <TabPane tab={13} key="13">
            
          </TabPane>
          <TabPane tab={14} key="14">
            
          </TabPane>
          <TabPane tab={15} key="15">
            
          </TabPane>
          <TabPane tab={16} key="16">
            
          </TabPane>
          <TabPane tab={17} key="17">
            
          </TabPane>
          <TabPane tab={18} key="18">
            
          </TabPane>
          <TabPane tab={19} key="19">
            
          </TabPane>
          <TabPane tab={20} key="20">
            
          </TabPane>
          <TabPane tab={21} key="21">
            
          </TabPane>
          <TabPane tab={22} key="22">
            
          </TabPane>
          <TabPane tab={23} key="23">
            
          </TabPane>
        </Tabs>
        
      </div>
    );
  }
}

export default Slider;