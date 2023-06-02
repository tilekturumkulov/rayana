import React from 'react';
import {SlCalculator, SlLike} from 'react-icons/sl'
import {GiTravelDress} from 'react-icons/gi'
import {AiOutlineCodeSandbox} from 'react-icons/ai'


const AbouServices = () => {
    return (
        <div className='about__services'>
            <div className="about__services-item">
                <div className="about__services-item_icon"><SlCalculator/></div>
                <h3 className="about__services-item_title">Оперативный<br></br>расчет</h3>
            </div>
            <div className="about__services-item">
                <div className="about__services-item_icon">
                    <GiTravelDress/>
                </div>
                <h3 className="about__services-item_title">
                    Разработка<br></br>моделей
                </h3>
            </div>
            <div className="about__services-item">
                <div className="about__services-item_icon">
                    <SlLike/>
                </div>
                <h3 className="about__services-item_title">
                    Контроль<br></br>качества
                </h3>
            </div>
            <div className="about__services-item">
                <div className="about__services-item_icon">
                    <AiOutlineCodeSandbox/>
                </div>
                <h3 className="about__services-item_title">
                    Подготовка на<br></br>маркетплейс
                </h3>
            </div>
        </div>
    );
};

export default AbouServices;