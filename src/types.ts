export interface iToDoList {
    [key: number]: iToDoItem;
}

export interface iToDoItem {
    id: number;
    title: string;
    description: string;
    dueDate: Date;
    createdDate: Date;
    images: string[];
    links: string[];
}