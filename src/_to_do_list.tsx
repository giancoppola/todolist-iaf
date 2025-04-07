import {iToDoItem, UUID} from "./types.ts";

interface iToDoListProps {
    toDoList: iToDoItem[];
    removeToDoItem: (id: UUID) => void;
    updateToDoItem: (item: iToDoItem, id: UUID) => void;
}
export const ToDoList = (props: iToDoListProps) => {
    const HandleCheckboxClick = (item: iToDoItem, id: UUID) => {
        const updatedToDoItem: iToDoItem = {...item};
        updatedToDoItem.complete = !updatedToDoItem.complete;
        props.updateToDoItem(updatedToDoItem, id);
    }
    return (
        <>
        { props.toDoList.length > 0 &&
            <>
            <ul className="to-do-list">
                { props.toDoList.map(item =>
                    <li key={item.id} data-task-complete={item.complete} className="to-do-list-item">
                        <div className="to-do-list-item__left">
                            <input className="to-do-list-item__complete" type="checkbox" checked={item.complete}
                            onClick={() => {HandleCheckboxClick(item, item.id)}}/>
                            <div className="to-do-list-item__text">
                                <h3 className="to-do-list-item__title">{item.title}</h3>
                                <p className="to-do-list-item__desc">{item.description}</p>
                            </div>
                        </div>
                        <button onClick={() => {
                            props.removeToDoItem(item.id)
                        }} className="to-do-list-item__delete">
                            <span className="material-symbols-outlined">
                                close
                            </span>
                        </button>
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