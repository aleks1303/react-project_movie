import {Link} from "react-router-dom";


const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li className={'m-2'} ><Link to={'/?page=1'}>Home</Link></li>
            </ul>
        </div>
    );
};

export default MenuComponent;