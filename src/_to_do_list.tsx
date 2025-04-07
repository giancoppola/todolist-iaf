import {iToDoItem, UUID} from "./types.ts";
import {useEffect, useState} from "react";

interface iToDoListProps {
    toDoList: iToDoItem[];
    removeToDoItem: (id: UUID) => void;
}
export const ToDoList = (props: iToDoListProps) => {
    return (
        <>
        { props.toDoList.length > 0 &&
            <>
            <ul className="to-do-list">
                { props.toDoList.map(item =>
                    <li key={item.id} className="to-do-list-item">
                        <input type="checkbox" checked={item.complete} />
                        <div className="to-do-list-item__text">
                            <h3 className="to-do-list-item__title">{item.title}</h3>
                            <p className="to-do-list-item__desc">{item.description}</p>
                        </div>
                        <button onClick={() => {props.removeToDoItem(item.id)}} className="to-do-list-item__delete">X</button>
                    </li>
                )}
            </ul>
            </>
        }
            {props.toDoList.length < 1 &&
                <p>Please create a new task using the button below!</p>
            }
        </>
    )
}