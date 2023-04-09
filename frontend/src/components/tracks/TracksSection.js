import { useState, useEffect } from 'react';
import DatePicker from './DatePicker';
import Radar from './RadarChart';
import Hamburger from '../navigation/Hamburger';

const TracksSection = (props) => {
  const { showNav } = props;
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const getData = async (input) => {
    setIsLoaded(false);
    setError(false);

    const endpoint = 'week';
    const param = `${input}`;

    const response = await fetch(`/api/${endpoint}/${param}`);
    if (response.status > 299) {
      setIsLoaded(true);
      setError(response.statusText);
      return;
    }
    let data = await response.json();
    if (data.length === 0) {
      setError('No Data Found');
      setIsLoaded(true);
    } else {
      setData(data);
      setIsLoaded(true);
    }
  };

  useEffect(() => {
    // getData(new Date().toISOString().slice(0, 10));
    getData('2021-11-13');
  }, []);

  return (
    <div className='section'>
      <div className='topBar'>
        <DatePicker
          submitFunc={getData}
          // initValue={new Date().toISOString().slice(0, 10)}
          initValue='2021-11-13'
        />
        <Hamburger showNav={showNav} />
      </div>
      <div>
        <Radar data={data.averages} />
      </div>
      <div className='scroll'>
        {error && <h1 className='error'>{error}</h1>}
        {!isLoaded && <h1 className='loading'>. . .</h1>}
        {isLoaded &&
          !error &&
          data.songs.map((item, i) => {
            return (
              <div className='trackRow' key={i}>
                <h1 className='rowEl rank'>{item.rank}</h1>
                <span className='trackData'>
                  <h4 className='rowEl artist'>{item.artist}</h4>
                  <h5 className='rowEl track'>{item.track}</h5>
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TracksSection;
