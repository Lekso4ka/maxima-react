import {Link} from "react-router-dom"
import "./style.css";

export default () => {
    return <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/page">Page</Link>
    </nav>
}