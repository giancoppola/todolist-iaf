import {useEffect, useState} from 'react'
import './App.css'
import {iToDoItem} from "./types.ts";

function App() {
  const [toDoList, setToDoList] = useState<iToDoItem[]>([]);

  useEffect(() => {
      const localStorageList = localStorage.getItem("toDoList");
      console.log("Local Storage List", localStorageList);
      if(localStorageList) {
          setToDoList(JSON.parse(localStorageList));
      }
  }, [])
  return (
    <>
      <h1>To Do List</h1>
      <div className="card">
      </div>
    </>
  )
}

export default App
