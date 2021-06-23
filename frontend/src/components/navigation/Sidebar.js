import Tab from './Tab';
import SmallTab from './SmallTab';

const Sidebar = (props) => {
  const { handleClick, activeTab } = props;
  return (
    <div className='sidebar'>
      <div className='titleContainer'>
        <div className='titleContent'>Top 100</div>
      </div>
      <div className='tabContainer'>
        <div>
          <Tab onClick={handleClick} activeTab={activeTab === 0} id={0}>
            Tracks
          </Tab>
          <Tab onClick={handleClick} activeTab={activeTab === 1} id={1}>
            Trends
          </Tab>
        </div>
        <div className='lowerTabs'>
          <SmallTab onClick={handleClick} activeTab={activeTab === 3} id={3}>
            About
          </SmallTab>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
