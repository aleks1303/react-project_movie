import {Link} from "react-router-dom";


const MenuComponent = () => {
    return (
        <div>
            <ul className={'flex'}>
                <li className={'m-2'} ><Link to={'/?page=1'}>Home</Link></li>
                <li className={'m-2'}><Link to={'/login'}>login</Link></li>
            </ul>
        </div>
    );
};

export default MenuComponent;