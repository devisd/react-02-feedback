import React from 'react';

const Statistics = props => {
  const keys = Object.keys(props);
  const values = Object.values(props);

  return keys.map((el, i) => {
    return (
      <li key={i}>
        <p>
          {el}: {values[i]}
        </p>
      </li>
    );
  });
};

export default Statistics;
