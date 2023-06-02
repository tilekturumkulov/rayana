import React from 'react';
import '../../styles/faq.scss'

const Faq = () => {
    return (
        <div className="faq">
            <div className='container'>
                <h2 className="faq__title">Частые вопросы</h2>
                <div className="row">
                <div className="col">
                    <div className="tabs">
                    <div className="tab">
                        <input type="checkbox" className='chck' id="chck1"/>
                        <label className="tab-label" htmlFor="chck1">Как я могу сделать заказ?</label>
                        <div className="tab-content">
                        Вы можете связаться с нами через наш сайт или по электронной почте. Мы с радостью ответим на все ваши вопросы и поможем оформить заказ на пошив женской одежды на заказ.
                        </div>
                    </div>
                    <div className="tab">
                        <input type="checkbox" className='chck' id="chck2"/>
                        <label className="tab-label" htmlFor="chck2">Когда нужен образец для пошива?</label>
                        <div className="tab-content">
                        Предоставление заказчиком образца поможет фабрике оперативно сделать лекала и описать техническое задание на планируемое изделие. Копирование по образцу позволяет перешагнуть этап разработки и конструирования изделия. Для заказчика это значительная экономия времени и ресурсов, так как доведение изделия до желаемого вида обычно проходит в постоянных корректировках опытного образца.
                        </div>
                    </div>
                    <div className="tab">
                        <input type="checkbox" className='chck' id="chck3"/>
                        <label className="tab-label" htmlFor="chck3">Почему пошив образца одежды будет дороже?</label>
                        <div className="tab-content">
                        Образец одежды это штучный экземпляр, пошив которого требует других ресурсов. На образец изделия требуется больший объем ткани и по другой стоимости, время на поиск необходимых материалов и затраченные силы специалистов. Срок исполнения не превышает 3 дней.
                        </div>
                    </div>
                    <div className="tab">
                        <input type="checkbox" className='chck' id="chck4"/>
                        <label className="tab-label" htmlFor="chck4">Зачем нужны лекала?</label>
                        <div className="tab-content">
                        Лекала нужны не только для получения качественного изделия, но и для предоставления исполнителю более точной оценки затрат на материалы, количество элементов в изделии и время исполнения заказа. Лекало позволит точнее сориентировать заказчика о стоимости изделия.
                        </div>
                    </div>
                    <div className="tab">
                        <input type="checkbox" className='chck' id="chck5"/>
                        <label className="tab-label" htmlFor="chck5">Почему нет прайс-листа на готовую одежду?</label>
                        <div className="tab-content">
                        Фабрика может точно озвучить затраты на отшив изделия, но ткани и фурнитура это сырье от разных поставщиков, сегодня оно есть у одного завтра может быть у другого или вообще отсутствовать. Поэтому, при пошиве одежды много переменных, по которым сложно держать прайс-лист на готовые изделия.
                        </div>
                    </div>
                    <div className="tab">
                        <input type="checkbox" className='chck' id="chck6"/>
                        <label className="tab-label" htmlFor="chck6">Есть ли в цеху ОТК?</label>
                        <div className="tab-content">
                        Отдел технического контроля (ОТК) необходим для проверки соответствия изделий техническому заданию и выявлению брака при изготовлении продукции.

                        Практика показывает, что какими бы фабрика ни обладала производственными мощностями, процент брака при изготовлении неизбежно будет присутствовать. Даже если заказчик неоднократно взаимодействовал, казалось бы, с надежным исполнителем, со временим, может обнаружиться брак. Причиной, в том числе, могут быть штатные перемещения сотрудников, скрытые от глаз заказчика.

                        Наша фабрика серьезно относится к присутствию ОТК на производстве. Мы прекрасно понимаем, что помимо логистических издержек, которые ложатся на исполнителя, неизбежны временные потери заказчика, вследствие перемещения и доукомплектования изделий.
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;