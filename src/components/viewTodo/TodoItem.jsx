import { Link } from "react-router-dom"


const TodoItem = ({ id, title, desc, dispatch }) => {

    const handleDelete = () => {
        dispatch({
            type: 'delete',
            payload: id,
        })
    }

    return (
        <div className="col-sm-5">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{ title }</h5>
                    <p className="card-text">{ `${desc.substring(0, 30)}...` }</p>
                    <Link to={`/edit/${id}`} className="btn btn-outline-success">Editar</Link>
                    <button className="btn btn-outline-danger ms-2" onClick={ handleDelete } >Eliminar</button>
                </div>
            </div>
        </div>
    )
}

export default TodoItem

