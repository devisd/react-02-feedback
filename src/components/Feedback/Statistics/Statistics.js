import React from 'react';
import './Statistics.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const props = { good, neutral, bad, total };
  const keys = Object.keys(props);
  const values = Object.values(props);
  const component = keys.map((el, i) => {
    return (
      <li className="statistics__item" key={i}>
        <p className="statistics__text">
          {el}: {values[i]}
        </p>
      </li>
    );
  });

  return (
    <ul className="statistics__list">
      {component}
      <li className="statistics__item">
        <p className="statistics__text">
          Positive feedback: {positivePercentage}
        </p>
      </li>
    </ul>
  );
};

export default Statistics;
