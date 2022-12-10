import {Outlet} from 'react-router-dom';
import {Navbar, Footer} from '../components';
import './style.css';

const Layout = () => {


    return ( <div className="flex-wrapper" style={{margin: 0, padding: 0}}>
        <Navbar />
        <Outlet/>
        <Footer />
    </div> );
}
 
export default Layout;
