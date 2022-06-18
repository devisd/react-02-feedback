import React from 'react';
import './FeedbackOptions.css';

const FeedbackOptions = ({ good, neutral, bad, onLeaveFeedback }) => {
  const props = { good, neutral, bad };
  const state = Object.keys(props);

  const component = state.map(e => {
    return (
      <li className="button__item" key={e}>
        <button type="button" onClick={onLeaveFeedback}>
          {e}
        </button>
      </li>
    );
  });

  return <ul className="button__list">{component}</ul>;
};

export default FeedbackOptions;
