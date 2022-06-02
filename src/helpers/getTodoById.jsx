import { useContext } from "react"
import { TodoContext } from "../context/TodosProvider"

export const getTodoById = (id) => {

    const [ todo ] = useContext(TodoContext)
    return todo.find(todo => todo.id == id)
}
