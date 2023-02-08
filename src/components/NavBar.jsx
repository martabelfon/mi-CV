import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : undefined)}>
                Hero
            </NavLink>
            <NavLink to="/experience">Experience</NavLink>
            <NavLink to="/education">Educations</NavLink>
            <NavLink to="/languages">Languages</NavLink>
            <NavLink to="/skills">Skills</NavLink>
        </div>
    )
}

export default Navbar;