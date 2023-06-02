import React from 'react';

const Services = () => {
    return (
        <div className='services'>
            <div className="container">
                    <h2 className="services__content-title">Мы специализируемся на пошиве:</h2>
                <div className="services__content">
                    <div className="services__content-item first" >
                        <h3 className="services__content-item_title">Женских</h3>
                    </div>
                    <div className="services__content-item second">
                        <h3 className="services__content-item_title">Мужских</h3>
                    </div>
                    <div className="services__content-item third">
                        <h3 className="services__content-item_title">Детских</h3>    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;