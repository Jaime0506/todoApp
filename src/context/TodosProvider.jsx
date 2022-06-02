import { createContext, useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

export const TodoContext = createContext()

const init = () => {
    return !localStorage.getItem('todos')
        ? [{ id: new Date().getTime(), title: 'Mi primer todo', desc: 'Aprender react es facil' }]
        : JSON.parse(localStorage.getItem('todos'))
}

const TodosProvider = ({ children }) => {

    const [todo, dispatch] = useReducer(todoReducer, init())

    return (
        <TodoContext.Provider value={[todo, dispatch]} >
            { children }
        </TodoContext.Provider>
    )
   
}

export default TodosProvider