import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { TodoContext } from "../../context/TodosProvider"

import useForm from "../../hooks/useForm"

const TodoEditForm = ({ title = '', desc = '', id = '' }) => {

    const [ , dispatch ] = useContext(TodoContext)

    const navigate = useNavigate()

    const [ value, handleInputChange ] = useForm({
        title,
        desc,
    })

    const handleSubmit = e => {
        e.preventDefault()

        dispatch({
            type: 'put',
            payload: {
                id,
                title: value.title,
                desc: value.desc,
            }
        })

        navigate(-1, {
            replace: true,
        })
    }

    return (
       <form onSubmit={ handleSubmit }>
            <label className='form-label'>Name Task</label>
            <input 
                type="text" 
                placeholder='Title' 
                className='form-control mb-3' 
                name='title' 
                onChange={ handleInputChange }
                value={ value.title }
            />

            <label className='form-label'>Description Task</label>
            <textarea 
                name="desc" 
                cols="30" 
                rows="4" 
                className='form-control' 
                placeholder='Task description'
                onChange={ handleInputChange }
                value={ value.desc }
            >
            </textarea>

            <div className="d-grid mt-3">
                <button className='btn btn-success' type='submit'>
                    Save
                </button>
            </div>
        </form> 
    )
}

export default TodoEditForm