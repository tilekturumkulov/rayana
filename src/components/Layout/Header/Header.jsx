import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className="header__content">
                    <NavLink to="/">
                        <h1 className="header__content-logo">DEFILE<br></br>
                        <span>
                            ПОШИВ
                        </span>
                        </h1>
                    </NavLink>
                    <div className="header__content-nav">
                        <div className="header__content-links">
                            <NavLink to="/about"> 
                                О нас
                            </NavLink>
                            <NavLink to="/services"> 
                                Наши услуги
                            </NavLink>
                            <NavLink to="/question"> 
                                Вопросы
                            </NavLink>
                            <NavLink to="/form"> 
                                Обратная связь
                            </NavLink>
                            <NavLink to="/contact"> 
                                Контакты
                            </NavLink>
                        </div>
                        <button type='submit' className="header__content-btn">
                            Заказать
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;