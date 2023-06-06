import { useEffect, useState } from 'react';

const useFetch = (url: string) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url, {
      method: 'GET',
    }).then(res => {
      if (res.ok) return res.json();
      throw new Error(`통신 실패`);
    }).then(res => setData(res));
  }, [url]);

  return data;

};

export default useFetch;