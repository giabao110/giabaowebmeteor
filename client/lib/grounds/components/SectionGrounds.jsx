import React from 'react';
import Group1 from './headergrounds/tab/Group1';
import Group2 from './headergrounds/tab/Group2';
import Group3 from './headergrounds/tab/Group3';
import Group4 from './headergrounds/tab/Group4';
import Group5 from './headergrounds/tab/Group5';
import Group6 from './headergrounds/tab/Group6';


class SectionGrounds extends React.Component {
    render() {
      return (
          <div>
            <div className="sectionground-div-column">
              <div className="sectionground-div-row">
                  {/* Group1 */}  
                  <div className="sectionground-group">
                    <Group1/>
                  </div>
                  {/* Group2 */}  
                  <div className="sectionground-group">
                    <Group2/>
                  </div>
                  {/* Group3 */}  
                  <div className="sectionground-group">
                    <Group3/>
                  </div>
              </div>
              <div className="sectionground-div-row">
                  {/* Group4 */}  
                  <div className="sectionground-group">
                    <Group4/>
                  </div>
                  {/* Group5 */}  
                  <div className="sectionground-group">
                    <Group5/>
                  </div>
                  {/* Group6 */}  
                  <div className="sectionground-group">
                    <Group6/>
                  </div>
              </div>
            </div>
          <div className="section-loading">
            <span className="icon-loanding"></span>
            <span className="italic f_24">Loading more ...</span>
          </div>
      </div>
      );
    }
  }
  
	export default SectionGrounds; 
