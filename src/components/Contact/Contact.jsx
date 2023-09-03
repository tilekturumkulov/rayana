import { SiGmail } from 'react-icons/si'
import {BsInstagram, BsWhatsapp, BsFillTelephoneFill} from 'react-icons/bs'

const Contact = () => {
    return (
        <div className='contact' id='contact'>
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
                        <a href='https://wa.me/0551577772?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%BF%D0%B8%D1%88%D1%83%20%D0%BF%D0%BE%20%D0%BF%D0%BE%D0%B2%D0%BE%D0%B4%D1%83...%3F%20' className="contact__content-left_item"><BsWhatsapp/>
                            Baytex-whatsapp
                        </a>
                        <div className="contact__content-left_item"><BsFillTelephoneFill/>
                            +996(999)-99-99-99
                        </div>
                    </div>
                    <div className="contact__content-right">
                        <p className="contact__content-right_item">+996 999-99-99-99</p>
                        <p className="contact__content-right_item">Кыргызстан г. Бишкек</p>
                        <p className="contact__content-right_item">Ул. Панфилова 123</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;