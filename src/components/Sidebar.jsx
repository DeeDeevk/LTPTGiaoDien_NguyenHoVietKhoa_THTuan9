
import './Sidebar.css';
import MenuItem from './MenuItem';

function Sidebar() {
    return ( 
        <div className='sideCon'>
            <MenuItem 
            to="/" 
            label="Trang chu"
            />
            <MenuItem 
            to="/congtru" 
            label="Cong Tru"
            />
            <MenuItem 
            to="/todolist" 
            label="To-do list"
            />
            <MenuItem 
            to="/toggleTheme" 
            label="Toggle theme"
            />
            <MenuItem 
            to="/shoppingCart" 
            label="Shopping cart"
            />
        </div>
     );
}

export default Sidebar;