import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "../components/NavBar"

import TodoEdit from "../components/todo/TodoEdit"
import TodoAdd from "../components/todo/TodoAdd"
import Todos from "../components/viewTodo/Todos"

const RouterApp = () => {
    return (
        <BrowserRouter basename="/todoApp">

            <NavBar />

            <div className="container pt-5">
                <Routes>
                    <Route path="/" element={<Todos />} />
                    <Route path="create" element={<TodoAdd />} />
                    <Route path="edit/:todoId" element={<TodoEdit />} />
                </Routes>
            </div>

        </BrowserRouter>
    )
}

export default RouterApp