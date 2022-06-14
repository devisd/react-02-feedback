import React from 'react';

const Statistics = props => {
  const keys = Object.keys(props);
  const values = Object.values(props);

  return keys.map((el, i) => {
    return (
      <p key={i}>
        {el}: {values[i]}
      </p>
    );
  });
};

export default Statistics;
