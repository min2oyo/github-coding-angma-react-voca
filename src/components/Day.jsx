import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const Day = () => {

  // 변수
  const { day } = useParams();
  const words = useFetch(`http://localhost:3001/words?day=${day}`);

  // 렌더링
  return (
    <div className='day'>Day</div>
  );
};

export default Day;