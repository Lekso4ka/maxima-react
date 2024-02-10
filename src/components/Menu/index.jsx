import {NavLink} from "react-router-dom"
import "./style.css";

export default () => {
    return <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
        <NavLink to="/products">Products</NavLink>
    </nav>
}