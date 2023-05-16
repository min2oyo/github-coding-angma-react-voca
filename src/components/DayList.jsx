import React from 'react';
import useFetch from '../hooks/useFetch';

const DayList = () => {

  // 변수
  const days = useFetch(`http://localhost:3001/days`);
  console.log(days);

  return (
    <div>DayList</div>
  );
};

export default DayList;