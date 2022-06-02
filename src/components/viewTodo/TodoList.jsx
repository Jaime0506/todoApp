import { useContext, useEffect } from "react"
import { TodoContext } from "../../context/TodosProvider"

import TodoItem from "./TodoItem"

const TodoList = () => {

    const [ todo, dispatch ] = useContext(TodoContext)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todo))
    }, [todo])

    return (
        <div className="row d-flex gap-3 justify-content-center">
            {
                todo.map(( todo ) => (
                    <TodoItem key={todo.id} {...todo} dispatch={dispatch} />
                ))
            }
        </div>
    )
}

export default TodoList