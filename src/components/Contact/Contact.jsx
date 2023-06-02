import React from 'react';
import { SiGmail } from 'react-icons/si'
import {BsInstagram, BsWhatsapp, BsFillTelephoneFill} from 'react-icons/bs'

const Contact = () => {
    return (
        <div className='contact'>
            <div className="container">
                <h2 className="contact__title">Контакты</h2>
                <div className="contact__content">
                    <div className="contact__content-left">
                        <div className="contact__content-left_item"><SiGmail/>
                            exemple@gmail.com
                        </div>
                        <div className="contact__content-left_item"><BsInstagram/>
                        @example.111
                        </div>
                        <div className="contact__content-left_item"><BsWhatsapp/>
                            rayana-whatsapp
                        </div>
                        <div className="contact__content-left_item"><BsFillTelephoneFill/>
                            +996(999)-99-99-99
                        </div>
                    </div>
                    <div className="contact__content-right">
                        <p className="contact__content-right_item">+996 999-99-99-99</p>
                        <p className="contact__content-right_item">Город. Бишкек</p>
                        <p className="contact__content-right_item">Ул. Панфилова 123</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;