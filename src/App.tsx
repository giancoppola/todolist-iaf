import {useEffect, useState} from 'react'
import './App.css'
import './global.css'
import {iToDoItem, UUID} from "./types.ts";
import {ToDoList} from "./_to_do_list.tsx";
import {ToDoAddButtonAndModal} from "./assets/_to_do_add.tsx";

function App() {
    const [toDoList, setToDoList] = useState<iToDoItem[]>([]);

    const AddToDoItem = (item: iToDoItem) => {
        let newToDoList = [...toDoList];
        newToDoList.push(item);
        setToDoList(newToDoList);
    }
    const RemoveToDoItem = (id: UUID) => {
        const itemIndex = toDoList.findIndex(el => el.id === id);
        if (itemIndex != -1) {
            let newToDoList = [...toDoList];
            newToDoList.splice(itemIndex, 1);
            setToDoList(newToDoList);
        }
    }
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
        <ToDoList removeToDoItem={RemoveToDoItem} toDoList={toDoList} />
        <ToDoAddButtonAndModal addToDoItem={AddToDoItem} />
      </>
    )
}

export default App
