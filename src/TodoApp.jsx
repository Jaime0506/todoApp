import RouterApp from './router/RouterApp'
import TodosProvider from './context/TodosProvider'

const TodoApp = () => {
    return (
        <TodosProvider>
            <RouterApp />     
        </TodosProvider>
    )
}

export default TodoApp