import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Word from './Word';

const Day = () => {

  // 변수
  const { day } = useParams();
  const words = useFetch(`http://localhost:3001/words?day=${day}`);

  // 렌더링
  return (
    <div className='day'>
      <h2>Day {day}</h2>
      {!words.length && <span>Loading...</span>}
      <table>
        <tbody>
          {words.map(word =>
            <Word key={word.id} word={word} />
          )}
        </tbody>
      </table>
    </div>
  );

};

export default Day;