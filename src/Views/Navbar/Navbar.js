import './Navbar.css'

export default function Navbar() {
    return (
        <nav class="navbar">
            <div class="nav-item">
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
            </div>
            <div class="nav-item">Diwali </div>
            <div class="nav-item">Chrismis</div>
            <div class="nav-item">Holi </div>
            <div class="nav-item">MakarSankranti </div>
            <div class="nav-item">

            </div>

        </nav>
    )
}