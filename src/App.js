
import React, { useEffect, useState } from 'react';
import TodoList from "./TodoList/TodoList"
import "./TodoList/TodoList.css"



function App() {

  const [data, setData] = useState({});

  useEffect(() => {
    fetch('/api/data')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
<TodoList/>
    </>
  );
}

export default App;
