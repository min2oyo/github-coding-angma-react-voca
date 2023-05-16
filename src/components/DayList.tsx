import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

export interface IDay {
  id: number;
  day: number;
}

const DayList = () => {

  // 변수
  const days: IDay[] = useFetch(`http://localhost:3001/days`);

  // 렌더링
  if (!days.length) return <div>`Loading...`</div>;
  return (
    <div className='dayList'>
      <ul className='list_day'>
        {days.map(day =>
          <li key={day.id}>
            <Link to={`/day/${day.day}`}>Day {day.day}</Link>
          </li>
        )}
      </ul>
    </div>
  );

};

export default DayList;