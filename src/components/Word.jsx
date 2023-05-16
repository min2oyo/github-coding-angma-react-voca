import { useState } from 'react';

const Word = ({ word: props }) => {

  // 변수
  const [word, setWord] = useState(props);
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  // 함수
  const toggleShow = () => setIsShow(!isShow);

  const toggleDone = () => {
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...word,
        isDone: !isDone,
      }),
    }).then(res => {
      if (res.ok) setIsDone(!isDone);
    });
  };

  const del = () => {
    if (window.confirm(`삭제 하시겠습니까?`)) {
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: "DELETE",
      }).then(res => {
        if (res.ok) {
          setWord({
            ...word,
            id: 0,
          });
        }
      });
    }
  };

  // 렌더링
  if (!word.id) return null;
  return (
    <tr className={isDone ? `off` : `on`}>
      <td>
        <input type="checkbox" checked={isDone} onChange={() => toggleDone()} />
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={toggleShow}>뜻 {isShow ? `숨기기` : `보기`}</button>
        <button onClick={del} className='btn_del'>삭제</button>
      </td>
    </tr>
  );
};

export default Word;