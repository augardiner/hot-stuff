import { useState } from 'react';
import TracksSection from './components/tracks/TracksSection';
import TrendsSection from './components/trends/TrendsSection';
import AboutSection from './components/about/AboutSection';
import Section from './components/navigation/Section';
import Sidebar from './components/navigation/Sidebar';

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const handleClick = (e) => {
    const index = parseInt(e.target.id, 0);
    if (index !== activeTab) {
      setActiveTab(index);
    }
  };
  return (
    <div className='app'>
      {/* sidebar */}
      <Sidebar handleClick={handleClick} activeTab={activeTab} />

      {/* content */}
      <div className='content'>
        <Section activeTab={activeTab === 0}>
          <TracksSection />
        </Section>
        <Section activeTab={activeTab === 1}>
          <TrendsSection />
        </Section>
        <Section activeTab={activeTab === 3}>
          <AboutSection />
        </Section>
      </div>

      {/* footer */}
      <div className='footer'>
        <span className='footerContainer'>
          <p className='sig'>AUG | 2021</p>
        </span>
      </div>
    </div>
  );
}

export default App;
