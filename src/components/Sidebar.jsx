
import './Sidebar.css';
import MenuItem from './MenuItem';

function Sidebar() {
    return ( 
        <div>
            <MenuItem 
            to="/" 
            label="Trang chu"
            />
            <MenuItem 
            to="/congtru" 
            label="Cong Tru"
            />
        </div>
     );
}

export default Sidebar;