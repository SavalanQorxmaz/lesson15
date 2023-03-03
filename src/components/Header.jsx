
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="container">

                <ul className="navbar">
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    <li>
                        <Link to='/users'>User List</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export { Header }