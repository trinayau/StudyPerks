import {Outlet} from 'react-router-dom';
import {Navbar} from '../components';
import './style.css';

const Layout = () => {


    return ( <div className="flex-wrapper" style={{margin: 0, padding: 0}}>
        <Navbar />
        <Outlet/>
    </div> );
}
 
export default Layout;
