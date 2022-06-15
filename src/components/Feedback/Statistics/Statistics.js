import React from 'react';
import './Statistics.css';

const Statistics = props => {
  const keys = Object.keys(props);
  const values = Object.values(props);
  return keys.map((el, i) => {
    return (
      <li className="statistics__item" key={i}>
        <p className="statistics__text">
          {el}: {values[i]}
        </p>
      </li>
    );
  });
};

export default Statistics;
