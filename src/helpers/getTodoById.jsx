import { useContext } from "react"
import { TodoContext } from "../context/TodosProvider"

export const getTodoById = (id) => {

    console.log('me lance')
    const [ todo ] = useContext(TodoContext)
    return todo.find(todo => todo.id == id)
}
