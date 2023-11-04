import { ITask } from "./types/tasks";
    
const BASE_URL = "http://127.0.0.1:4000";

export const getAllTodos = async (): Promise<ITask[]> => {
    const res = await fetch(`${BASE_URL}/tasks`, {cache: "no-store"});
    
    const todos = await res.json()
    return todos;
}

export const addTodo = async (todo: ITask): Promise<ITask> => {
    const res = await fetch(`${BASE_URL}/tasks`, {
        method: 'POST',
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify(todo)

    });
    
    const todos = await res.json()
    return todos;
}

export const updateTodo = async (todo: ITask): Promise<ITask> => {
    const res = await fetch(`${BASE_URL}/tasks/${todo.id}`, {
        method: 'PUT',
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify(todo)

    });
    
    const todos = await res.json()
    return todos;
}

export const deleteTodo = async (todo: ITask): Promise<ITask> => {
    const res = await fetch(`${BASE_URL}/tasks/${todo.id}`, {
        method: 'DELETE',
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify(todo)
    });
    
    const todos = await res.json()
    return todos;
}