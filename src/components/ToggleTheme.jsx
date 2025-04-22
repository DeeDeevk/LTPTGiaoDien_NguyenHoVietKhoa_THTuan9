import { useState } from 'react';
import './ToggleTheme.css';


function ToggleTheme() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    }
    console.log("Chế độ", theme);
    
    return ( 
        <div className={`app ${theme} themeCon`}>
            <button onClick={toggleTheme} className="toggle-btn">
                Chuyển sang {theme === "light" ? "Dark" : "Light"} Mode
            </button>
        </div>
     );
}

export default ToggleTheme;