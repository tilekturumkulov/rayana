import React from 'react';
import {HiOutlineUserGroup} from 'react-icons/hi'
import {RiUserHeartLine} from 'react-icons/ri'
import {GiSewingMachine} from 'react-icons/gi'


const AboutFigure = () => {
    return (
        <div className='about__figure'>
            <h2 className="about__figure-title">Более 150 компаний выбрали нашу фабрику своим<br></br>постоянным партнером</h2>
            <div className="about__figure-content">
                <div className="about__figure-items">
                    <div className="about__figure-items_icon"><HiOutlineUserGroup/></div>
                    <p className="about__figure-items_count">80</p>
                    <p className="about__figure-items_text">человек<br></br>в штате</p>
                </div>
                <div className="about__figure-items">
                    <div className="about__figure-items_icon"><RiUserHeartLine/></div>
                    <p className="about__figure-items_count">250+</p>
                    <p className="about__figure-items_text">довольных<br></br>клиентов</p>
                </div>
                <div className="about__figure-items">
                    <div className="about__figure-items_icon"><GiSewingMachine/></div>
                    <p className="about__figure-items_count">15 лет</p>
                    <p className="about__figure-items_text">успешной<br></br>работы</p>
                </div>
            </div>
        </div>
    );
};

export default AboutFigure;