import React, {useState} from 'react';
import '../../style/ScheduleStyle.css';
import Button from "../../UI/button/Button";

const SMART = function () {
    const [SMART, setSMART] = useState([
        {name: 'Конкретность', body: 'Вопросы. </br>' +
                                     'Что ожидаете? Каким образом?'},
        {name: 'Измеримость', body: 'Вопросы. </br>' +
                'Как определить что цель достигнута'},
        {name: 'Достижимость(Реалистичность)', body: 'Вопросы. </br>' +
                'Что поможет? Что помешает?? Дополнительные условия от которых зависит цель.'},
        {name: 'Актуальность(Обоснованная)', body: 'Вопросы. </br>' +
                'Для чего она(зачем)? Выгоды?? Противоречия??? '},
        {name: 'Временные ограничения', body: 'Вопросы. </br>' +
                'За какое время её реально сделать? За какое нужно??'},
    ]);

    const [pattern, setPattern] = useState([
        {step: '1 шаг. Сформировать потребность', body: 'Необходимость. 1 цель - 1 SMART задача'},
        {step: '2 шаг. Актуальность.', body: ' Нужно ли это? Есть ли более приоритетные цели??'},
        {step: '3 шаг. Колличественные показатели', body: 'Точное количество.'},
        {step: '4 шаг. Дедлайн.', body: 'За сколько возможно? За сколько Нужно? Что делать??'},
        {step: '5 шаг. Возможность.', body: 'Возможно ли достичь за данное время? Можно ли отложить если необходимо'},
    ])

    return (
        <div className='schedule'>
            <p>
                SMART - это техника постановки эффективных целей в менеджменте. Название содержит
                аббревиатуру по названию критериев, которыми обладает правельно поставленная цель:
                1. specific(конкретная)
                2. measurable(измеримая)
                3. attainable(достижимая)
                4. relevant(актуальная)
                5. time-bound(ограниченная во времени)
            </p>
            <div>
                {SMART.map((smart) =>
                <div className='block_list'>
                    <h3>{smart.name}</h3>
                    <div>{smart.body}</div>
                </div>
                )}
            </div>
            <div className='background_blue'>
                <h2>Шаблон</h2>
                {pattern.map(({step, body}) =>
                <div>
                    <h3>{step}</h3>
                    <div>{body}</div>
                </div>
                )}
                <Button onClick={() => {}}>add SMART</Button>
            </div>
        </div>
    );
};

export default SMART;