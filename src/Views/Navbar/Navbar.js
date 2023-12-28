import './Navbar.css';
import { NavLink } from 'react-router-dom';


export default function Navbar() {
    return (
        <nav className="navbar">
            <NavLink className="nav-item">
                <select id="selectmsg"
                    defaultValue={localStorage.getItem("language")}
                    onChange={(e) => {
                        localStorage.setItem("language", e.target.value);
                        window.location.reload();
                    }}>
                    <option value="mr">Marathi</option>
                    <option value="en">English</option>
                    <option value="hi">Hindi</option>
                </select>
            </NavLink>
            <NavLink to="/" className="nav-item">Home</NavLink>
            <NavLink to="/Diwali" className="nav-item">Diwali </NavLink>
            <NavLink to="/Christmas" className="nav-item">Chrismas</NavLink>
            <NavLink to="/Holi" className="nav-item">Holi </NavLink>
            <NavLink to="/MakarSankranti" className="nav-item">MakarSankranti </NavLink>
        </nav>
    
    )
}