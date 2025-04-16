import { NavLink } from 'react-router-dom'
import './MenuItem.css';

function MenuItem({to, label}) {
    return ( 
        <NavLink to={to} className="mn">
           {label} 
        </NavLink>         
    );
}

export default MenuItem;