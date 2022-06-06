import { useParams, Navigate } from "react-router-dom"
import { getTodoById } from "../../helpers/getTodoById"

import TodoEditForm from "./TodoEditForm"

const TodoEdit = () => {

    const { todoId } =  useParams()

    const todo = getTodoById(todoId)

    if (!todo) return <Navigate to='/' />

    return <TodoEditForm {...todo} />
}

export default TodoEdit