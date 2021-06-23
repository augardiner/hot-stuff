import { useState, useEffect } from 'react';
import FeatureSelect from './FeatureSelect';
import Line from './LineChart';

const features = require('./features.json');

const TrendsSection = () => {
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
      <FeatureSelect submitFunc={getData} initValue='tempo' />
      {error && <h1 className='error'>{error}</h1>}
      {!isLoaded && <h1 className='loading'>. . .</h1>}
      <div className='chartSection'>
        <Line data={data.data} />
      </div>
      <h4 className='audioFeatures'>
        Audio Features (
        <a
          className='sourceLink'
          target='_blank'
          rel='noopener noreferrer'
          href='https://developer.spotify.com/documentation/web-api/reference/#object-audiofeaturesobject'
        >
          Source
        </a>
        )
      </h4>
      <div className='featureDescription scroll'>
        {features.map((feature, i) => {
          return (
            <p>
              <b>{feature.title}: </b>
              {feature.desctiption}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default TrendsSection;
