import Header from './Header/Header';
import { Outlet } from 'react-router-dom';

const Layout = ({active, setActive}) => {
    return (
        <>
        <Header active={active} setActive={setActive}/>
            <Outlet/>
        </>
    );
};

export default Layout;