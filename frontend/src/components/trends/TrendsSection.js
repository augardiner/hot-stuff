import { useState, useEffect } from 'react';
import FeatureSelect from './FeatureSelect';
import Line from './LineChart';
import Hamburger from '../navigation/Hamburger';

const features = require('./features.json');

const TrendsSection = (props) => {
  const { showNav } = props;
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const getData = async (input) => {
    setIsLoaded(false);
    setError(false);

    const endpoint = 'analysis';
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
    getData('tempo');
  }, []);

  return (
    <div className='section'>
      <div className='topBar'>
        <FeatureSelect submitFunc={getData} initValue='tempo' />
        <Hamburger showNav={showNav} />
      </div>
      {error && <h1 className='error'>{error}</h1>}
      {!isLoaded && <h1 className='loading'>. . .</h1>}
      <div>
        <Line data={data.data} />
      </div>
      <div className='audioFeatures scroll'>
        <h4>
          Audio Features (
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://developer.spotify.com/documentation/web-api/reference/#object-audiofeaturesobject'
          >
            Source
          </a>
          )
        </h4>
        <div>
          {features.map((feature, i) => {
            return (
              <p key={i} className='featureDescription'>
                <b>{feature.title}: </b>
                {feature.desctiption}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TrendsSection;