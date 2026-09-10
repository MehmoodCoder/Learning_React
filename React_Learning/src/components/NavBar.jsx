import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <header className="navbar">
            <div className="logo">Mehmood Hassan</div>
            <nav className="nav-links">
                <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
                    Home
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")}>
                    About
                </NavLink>
                <NavLink to="/projects" className={({ isActive }) => (isActive ? "active-link" : "")}>
                    Projects
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? "active-link" : "")}>
                    Contact
                </NavLink>
            </nav>
        </header>
    );
}

export default NavBar;