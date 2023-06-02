import React from 'react';
import AbouServices from '../AboutServices/AboutServices';
import AboutFigure from '../AboutFigure/AboutFigure';
import AboutImg from '../../assets/about.jpg'

const About = () => {
    return (
        <div className='about'>
            <div className="container">
                <h2 className="about__title">
                    О нас
                </h2>
                <AbouServices/>
                <AboutFigure/>
                <div className="about__content">
                    <div className="about__content-top">
                    <img className='about__content-img' src={AboutImg} alt="" />
                    <p className="about__content-text">
                        Швейное производство <span>Rayana</span> полного цикла (г. Бишкек) предлагает сотрудничество!  Шьём преимущественно на маркетплейсы. Мы предлагаем полный спектр услуг от А до Я, это изготовление лекал по фото, пошив и отправка образца, онлайн выбор и закуп тканей, фурнитуры, качественный пошив, упаковка, отправка. Также можем связать с теми кто изготавливает этикетки и занимается фулфилментом.
                    </p>
                    </div>
                    <div className="about__content-bottom">
                    <span>
                        У нас производство полного цикла, шьём изделия под ключ!
                        Мы специализируемся на пошиве женской, мужской и детской одежды. Минимальная партия: от 500 единиц на модель. Сделаем расчет стоимости пошива и разработаем лекала по фотографии, сделаем градацию нужных размеров,
                        сошьем образец, также мы работаем с тканью заказчика.
                        Вся производимая продукция проходит контроль качества на каждом этапе производства. 
                        Гарантируем соблюдение сроков и высокое качество изделий.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;