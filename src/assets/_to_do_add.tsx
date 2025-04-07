import {useEffect, useRef, useState} from "react";
import {iToDoItem} from "../types.ts";

interface iToDoAddButtonAndModalProps {
    addToDoItem: (item: iToDoItem) => void;
}
export const ToDoAddButtonAndModal = (props: iToDoAddButtonAndModalProps) => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const OpenDialog = () => {
        dialogRef.current?.showModal();
    }

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const AddItem = () => {
        const newToDoItem: iToDoItem = {
            id: crypto.randomUUID(),
            title: title,
            description: description,
            complete: false,
            dueDate: new Date(),
            createdDate: new Date(),
            images: [],
            links: [],
        }
        props.addToDoItem(newToDoItem);
        dialogRef.current?.close();
    }
    useEffect(() => {
        dialogRef.current?.addEventListener("click",(e) => {
            const rect = dialogRef.current?.querySelector('.dialog-content')?.getBoundingClientRect();
            if (rect) {
                const clickedInDialog =
                    e.clientX >= rect.left &&
                    e.clientX <= rect.right &&
                    e.clientY >= rect.top &&
                    e.clientY <= rect.bottom;

                if (!clickedInDialog) {
                    dialogRef.current?.close();
                }
            }
        })
    }, []);
    return (
        <>
        <dialog ref={dialogRef}>
            <div className="dialog-content">
                <div className="form-input-container">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <button onClick={AddItem}>Add Item</button>
            </div>
        </dialog>
            <button onClick={OpenDialog}>Create Task</button>
        </>
    )
}