import { useContext, useEffect } from "react"
import { TodoContext } from "../../context/TodosProvider"

import useForm from "../../hooks/useForm"

const TodoAdd = () => {

    const [ todo, dispatch ] = useContext(TodoContext)

    const [{ title, desc }, handleInputChange, reset] = useForm({
        title: '',
        desc: '',
    })

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todo))
    }, [todo])

    const handleSubmit = e => {
        e.preventDefault()
        
        dispatch({
            type: 'add',
            payload: {
                id: new Date().getTime(),
                title,
                desc
            }
        })

        reset()
    }

    return (
        <>
            <form onSubmit={ handleSubmit }>
                <label className='form-label'>Name Task</label>
                <input 
                    type="text" 
                    placeholder='Title' 
                    className='form-control mb-3' 
                    name='title' 
                    onChange={ handleInputChange }
                    value={ title }
                />

                <label className='form-label'>Description Task</label>
                <textarea 
                    name="desc" 
                    cols="30" 
                    rows="4" 
                    className='form-control' 
                    placeholder='Task description'
                    onChange={ handleInputChange }
                    value={ desc }
                >
                </textarea>

                <div className="d-grid mt-3">
                    <button className='btn btn-success' type='submit'>
                        Save
                    </button>
                </div>
            </form>
        </>
    )
}

export default TodoAdd