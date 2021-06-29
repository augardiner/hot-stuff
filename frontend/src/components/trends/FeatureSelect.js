import { useState } from 'react';

const FeatureSelect = (props) => {
  const { submitFunc } = props;
  const [inputValue, setInputValue] = useState();
  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      submitFunc(inputValue);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <select name='feature' className='inputField' onChange={handleChange}>
        <option value='tempo'>Tempo</option>
        <option value='energy'>Energy</option>
        <option value='danceability'>Danceability</option>
        <option value='instrumentalness'>Instrumentalness</option>
        <option value='liveness'>Liveness</option>
        <option value='speechiness'>Speechiness</option>
        <option value='acousticness'>Acousticness</option>
      </select>
      <input className='inputBtn' type='submit' value='Go' />
    </form>
  );
};

export default FeatureSelect;
