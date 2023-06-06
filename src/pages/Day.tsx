import { useParams } from 'react-router-dom';
import Word from './components/Word';
import { Iword } from '../model/type';
import useFetch from '../hooks/useFetch';

const Day = () => {

  const { day } = useParams<{ day: string; }>(); // 이게 정석?
  const words: Iword[] = useFetch(`http://localhost:3001/words?day=${day}`);

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