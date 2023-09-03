import { NavLink } from 'react-router-dom';
import logo from '../../../../public/logo.jpg'

const Header = ({active, setActive}) => {
    return (
        <header className='header'>
            <div className="container">
                <div className="header__content">
                    <NavLink to="/">
                        <img className='header__content-logo' src={logo} alt="Baytex logo" />
                    </NavLink>
                    <div className="header__content-nav">
                        <div className="header__content-links">
                            <NavLink href="#about"> 
                                О нас
                            </NavLink>
                            <NavLink href="#contact"> 
                                Контакты
                            </NavLink>
                        </div>
                        <button type='submit' className="header__content-btn" onClick={() => setActive(!active)}>
                            Заказать
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;