import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3">
            <Link className="navbar-brand" to="/" >TodoApp</Link>

            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> */}

            <div className="navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/" >Todos</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/create" >Create Todos</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar