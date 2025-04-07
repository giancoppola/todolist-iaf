import {useEffect, useState} from 'react'
import './App.css'
import './global.css'
import {iToDoItem, UUID} from "./types.ts";
import {ToDoList} from "./_to_do_list.tsx";
import {ToDoAddButtonAndModal} from "./_to_do_add.tsx";

function App() {
    const [toDoList, setToDoList] = useState<iToDoItem[]>([]);

    const GetListFromLocalStorage = () => {
        const localStorageList = localStorage.getItem("toDoList");
        console.log("Local Storage List", localStorageList);
        if(localStorageList) {
            setToDoList(JSON.parse(localStorageList));
        }
    }
    const SaveListToLocalStorage = (list: iToDoItem[]) => {
        localStorage.setItem("toDoList", JSON.stringify(list));
    }

    const UpdateToDoItem = (item: iToDoItem, id: UUID) => {
        const itemIndex = toDoList.findIndex(el => el.id === id);
        if (itemIndex != -1) {
            let newToDoList = [...toDoList];
            newToDoList[itemIndex] = item;
            setToDoList(newToDoList);
            SaveListToLocalStorage(newToDoList);
        }
    }
    const AddToDoItem = (item: iToDoItem) => {
        let newToDoList = [...toDoList];
        newToDoList.push(item);
        setToDoList(newToDoList);
        SaveListToLocalStorage(newToDoList);
    }
    const RemoveToDoItem = (id: UUID) => {
        const itemIndex = toDoList.findIndex(el => el.id === id);
        if (itemIndex != -1) {
            let newToDoList = [...toDoList];
            newToDoList.splice(itemIndex, 1);
            setToDoList(newToDoList);
            SaveListToLocalStorage(newToDoList);
        }
    }
    useEffect(() => {
        GetListFromLocalStorage();
    }, [])
    return (
      <>
        <h1>To Do List</h1>
        <ToDoList updateToDoItem={UpdateToDoItem} removeToDoItem={RemoveToDoItem} toDoList={toDoList} />
        <ToDoAddButtonAndModal addToDoItem={AddToDoItem} />
      </>
    )
}

export default App
