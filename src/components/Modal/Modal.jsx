import React from "react";

const Modal = ({active, setActive}) => {
    if(active){
        return (
            <div className='modal'>
            <div className="container">
                <div className="modal__section">
                    <form action="" className="modal__content">
                    <label htmlFor="fname" className='modal__content-label'>Оставьте заявку!</label>
                    <button onClick={() => setActive(!active)} className="modal__content-close">X</button>
                    <label htmlFor="fname" className='modal__content-label'>Мы свяжемся с вами в ближайщее время</label>
                        <input type="text" name="" id="" className="modal__content-inp" placeholder='Введите ваше ФИО'/>
                        <input type="tel" name="" id="" className="modal__content-inp" placeholder='Ваш номер телефона'/>
                        <textarea type='text' name='message' className='modal__content-text' defaultValue='Сообщение'/>
                        <button className="modal__content-btn">Отправить</button>
                    </form>
                </div>
            </div>
        </div>
        )
    }
};

export default Modal;