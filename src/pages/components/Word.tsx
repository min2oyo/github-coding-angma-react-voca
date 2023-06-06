import { useState } from 'react';
import { Iprops } from '../../model/type';

const Word = ({ word: props }: Iprops) => {

  const [word, setWord] = useState(props);
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  const toggleShow = () => setIsShow(!isShow);

  const toggleDone = () => {
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
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

  if (!word.id) return null;
  return (
    <tr className={isDone ? `off` : `on`}>
      <td>
        <label htmlFor="checkWord">{ }</label>
        <input id="checkWord" type="checkbox" checked={isDone} onChange={() => toggleDone()} />
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button type='button' onClick={toggleShow}>뜻 {isShow ? `숨기기` : `보기`}</button>
        <button type='button' className='btn_del' onClick={del}>삭제</button>
      </td>
    </tr>
  );

};

export default Word;