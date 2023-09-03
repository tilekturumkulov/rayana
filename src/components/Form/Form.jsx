import formImg from '../../assets/form.jpg'

const Form = () => {
    return (
        <div className='form' id=''>
            <div className="container">
                <h2 className="form__title">Форма заявки</h2>
                <div className="form__section">
                    <img src={formImg} alt="" className="form__section-img" />
                    <form action="" className="form__content">
                    <label htmlFor="fname" className='form__content-label'>Вопросы?</label>
                    <label htmlFor="fname" className='form__content-label'>Не откладывайте на потом, превратите свои модные идеи в реальность прямо сейчас!</label>
                        <input type="text" name="" id="" className="form__content-inp" placeholder='Введите ваше ФИО'/>
                        <input type="tel" name="" id="" className="form__content-inp" placeholder='Ваш номер телефона'/>
                        <textarea type='text' name='message' className='form__content-text' defaultValue='Сообщение'/>
                        <button className="form__content-btn">Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Form;