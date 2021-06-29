import { useState } from 'react';

const DatePicker = (props) => {
  const { initValue, submitFunc } = props;
  const [inputValue, setInputValue] = useState(initValue);
  const today = new Date().toISOString().slice(0, 10);
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
      <input
        className='inputField'
        type='date'
        value={inputValue}
        onChange={handleChange}
        min='1958-07-27'
        max={today}
      />
      <input className='inputBtn' type='submit' value='Go' />
    </form>
  );
};

export default DatePicker;
