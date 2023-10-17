import {Link, Outlet} from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';




function Layout() {
    return(
 <>
     <Header />
    <Outlet/>
    <Footer/>
 </>
 );
}


export default Layout;