export interface iToDoList {
    [key: number]: iToDoItem;
}

export interface iToDoItem {
    id: UUID;
    title: string;
    description: string;
    complete: boolean;
    dueDate: Date;
    createdDate: Date;
    images: string[];
    links: string[];
}

export type UUID = `${string}-${string}-${string}-${string}-${string}`;