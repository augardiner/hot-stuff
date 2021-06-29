import styled from 'styled-components';
import Tab from './Tab';
import SmallTab from './SmallTab';

const Sidebar = (props) => {
  const { handleClick, activeTab, className } = props;
  return (
    <div className={className}>
      <div className='titleContainer sidebarHeader'>
        <div className='titleContent'>Hot 100</div>
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

const StSidebar = styled(Sidebar)`
  position: fixed;
  height: calc(100vh - 25px);
  width: 35vw;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: var(--dark-2);
  z-index: 2;
  transition: opacity 0.5s;
  ${(props) => (props.nav ? 'opacity: 1;' : 'opacity: 0;')};

  @media only screen and (min-width: 800px) {
    opacity: 1;
    width: 15vw;
  }
`;

export default StSidebar;
