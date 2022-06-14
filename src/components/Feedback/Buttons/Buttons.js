import React from 'react';

const Buttons = ({ props, onUpdateStatistic }) => {
  const state = Object.keys(props);

  return state.map(e => {
    return (
      <li key={e}>
        <button type="button" onClick={onUpdateStatistic}>
          {e}
        </button>
      </li>
    );
  });
};

export default Buttons;
