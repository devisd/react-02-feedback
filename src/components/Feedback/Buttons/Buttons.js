import React from 'react';
import './Buttons.css';

const Buttons = ({ good, neutral, bad, onUpdateStatistic }) => {
  const props = { good, neutral, bad };
  const state = Object.keys(props);

  return state.map(e => {
    return (
      <li className="button__item" key={e}>
        <button type="button" onClick={onUpdateStatistic}>
          {e}
        </button>
      </li>
    );
  });
};

export default Buttons;
