// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useState } from 'react';

import { DataResponse } from '../type';

import style from './app.module.css';

export function App() {
  const [id, setId] = useState(1);
  const [data, setData] = useState<DataResponse>();

  const getData = async () => {
    // Here we can see an example of BFF
    // We can call the four calls here, but it was made on BFF service
    // leaving the frontend call only one endpoint
    const response = await fetch(`http://localhost:3000/data/${id}`);
    const data = await response.json();
    console.log(data);
    setData(data);
  };

  return (
    <main className={style.container}>
      <label htmlFor="userId"></label>
      <input
        className={style.input}
        type="number"
        name="userId"
        id="userId"
        onChange={(e) => setId(+e.target.value)}
      />
      <button className={style.btn} onClick={getData}>
        Fetch
      </button>
      <h1>Response:</h1>
      {data && <label>{JSON.stringify(data)}</label>}
    </main>
  );
}

export default App;
