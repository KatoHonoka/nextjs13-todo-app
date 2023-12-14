import { Task } from "./types";

// DBに存在するタスクを取得する
export const getAllTodos = async (): Promise<Task[]> => {
    const res = await fetch(`http://localhost:3001/tasks`, { 
        cache: "no-store",  //SSR
    });
    const todos = res.json();

    return todos;
};

// DBに新しくタスクを追加する
export const addTodo = async (todo: Task): Promise<Task> => {
    const res = await fetch(`http://localhost:3001/tasks`, { 
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify( todo ),
    });
    const newTodo = res.json();

    return newTodo;
};

// タスクを編集する
export const editTodo = async (id: string, newText: string): Promise<Task> => {
    const res = await fetch(`http://localhost:3001/tasks/${id}`, { 
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: newText }),
    });
    const updatedTodo = res.json();

    return updatedTodo;
};

// タスクを削除する
export const deleteTodo = async (id: string): Promise<Task> => {
    const res = await fetch(`http://localhost:3001/tasks/${id}`, { 
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const deleteTodo = res.json();

    return deleteTodo;
};