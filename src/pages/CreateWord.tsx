import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Iday } from "../model/type";
import useFetch from "../hooks/useFetch";

const CreateWord = () => {

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const days: Iday[] = useFetch(`http://localhost:3001/days`);
  const dayRef = useRef<HTMLSelectElement>(null);
  const engRef = useRef<HTMLInputElement>(null);
  const korRef = useRef<HTMLInputElement>(null);


  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isLoading && dayRef.current && engRef.current?.value && korRef.current?.value) {
      setIsLoading(true);

      const day = Number(dayRef.current.value);
      const eng = engRef.current.value;
      const kor = korRef.current.value;

      fetch(`http://localhost:3001/words/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          day,
          eng,
          kor,
          isDone: false,
        })
      }).then(res => {
        if (res.ok) {
          alert(`생성이 완료 되었습니다`);
          navigate(`/day/${day}`);
          setIsLoading(false);
        }
      });
    } else {
      alert(`빈칸이 있는지 확인해주세요`);
    }

  };

  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label>Eng</label>
        <input type="text" placeholder="computer" ref={engRef} />
      </div>
      <div className="input_area">
        <label>Kor</label>
        <input type="text" placeholder="컴퓨터" ref={korRef} />
      </div>
      <div className="input_area">
        <label htmlFor="days">Day</label>
        <select id="days" ref={dayRef}>
          {days.map(day =>
            <option key={day.id} value={day.day}>
              {day.day}
            </option>
          )}
        </select>
      </div>
      <button type="submit" className={isLoading ? `is-loading` : ``}>
        {isLoading ? `Saving...` : `저장`}
      </button>
    </form >
  );

};

export default CreateWord;