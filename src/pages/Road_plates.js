//Дорожные плиты
import React from 'react';
import Zayavka from '../components/zayavka/Zayavka';
import roadplates_img from './images/road_plates/Road.jpg';

const Roadplates = () => {
    return (
        <div class="container_main">
            <div class="main_text">
                <h1 className="ShiftLeft h1_tovar_name">Дорожные плиты</h1>
                <p style={{ textAlign: 'center' }}>
                    <img src={roadplates_img} alt=""></img>
                </p>
                <p className="main_text_p">
                    Широкий ассортимент типов ЖБИ изделий и их форм,
                    предлагаемых сегодня на рынке строительных материалов,
                    позволяет быстро решать большое количество задач, связанных
                    с обустройством дорожных покрытий, складских и
                    производственных территорий, а также мощением садовых
                    дорожек.
                </p>
                <h2 className="color_h2_tovpage">
                    ЧТО ТАКОЕ ЖЕЛЕЗОБЕТОННЫЕ ДОРОЖНЫЕ ПЛИТЫ
                </h2>
                <p className="main_text_p">
                    Дорожные плиты являются железобетонными изделиями, имеющими
                    прямоугольную, шестиугольную и трапециевидную форму,
                    выполненными по стандартной технологии для данного вида
                    строительных материалов. В их основе лежит напряженная или
                    не напряженная арматура, а роль связующего вещества
                    выполняет бетон. Толщина этих плит составляет от 14 до 18
                    сантиметров. Что же касается габаритов, то, например, в
                    наиболее распространенных из них прямоугольных плитах они
                    бывают такие:
                    <br></br>• по длине от 1,75 до 6 метров;
                    <br></br>• по ширине от 1,5 до 3,75 метра.
                </p>
                <h2 className="color_h2_tovpage">
                    ОБЛАСТЬ ПРИМЕНЕНИЯ ДОРОЖНЫХ ПЛИТ
                </h2>
                <p className="main_text_p">
                    Для строительства дорог, временных подъездных путей,
                    складских площадок и тротуаров широко применяются дорожные
                    плиты, которые представляют собой плоские железобетонные
                    изделия заводского изготовления, способные выдерживать
                    большие весовые нагрузки. Они могут быть использованы в
                    местах проезда грузового автомобильного транспорта и
                    спецтехники, движения пешеходов, складирования материалов и
                    т.д.
                </p>
                <h2 className="color_h2_tovpage">ВИДЫ ДОРОЖНЫХ ПЛИТ</h2>
                <p className="main_text_p">
                    В зависимости от назначения, существуют разные виды.
                    Соответственно, для их приготовления используются разные
                    марки бетона.
                </p>
                <ul class="delivery_beton">
                    <li>
                        <b>ПДП. </b>
                        Является наиболее распространенным типом, применяемых
                        для различных видов дорог. Может выдерживать низкие
                        температуры до −50 град., и нагрузку до 6000 кг на одно
                        колесо большегрузного транспорта. Все эти значения
                        весьма условны, ведь именно такие свойства будут зависит
                        от применяемой марки бетона.
                    </li>
                    <li>
                        <b>ПДН. </b>
                        Подобный конструктив предварительно напряженной плиты,
                        вкупе с высокомарочным бетоном, способны выдерживать
                        большие нагрузки и температуру до −55 град. Подобные
                        изделия рекомендуются к применению в жестких
                        климатических условиях и при наличии мягкого грунта.
                    </li>
                    <li>
                        <b>ПАГ аэродромная. </b>
                        Этот вид можно назвать лидером во всех отношениях, так
                        как именно он способен выдерживать запредельные нагрузки
                        годами без разрушений. Такие характеристики незаменимы
                        при устройстве аэродромных покрытий для транспортировки
                        тяжелой техники и монтаже взлетно−посадочных полос.
                        Подобные изделия могут выдерживать одновременную
                        нагрузку до 75 тонн. Эти и прочие характеристики
                        указываются в ГОСТ 25912-2015.
                    </li>
                </ul>
                <p className="main_text_p">
                    Как и прочие железобетонные изделия, рассматриваемый
                    материал подлежит обязательной маркировке, которая
                    предусмотрена в основном техническом документе ГОСТ
                    21924.0-84:
                </p>
                <ul class="delivery_beton">
                    <li>1 – дорожные, предназначающиеся постоянных дорог;</li>
                    <li>2 – предназначающиеся временных покрытий;</li>
                    <li>П – прямоугольной формы;</li>
                    <li>ПБ – прямоугольные, имеющие один совмещенный борт;</li>
                    <li>ПББ – прямоугольные, имеющие два совмещенных борта;</li>
                    <li>ПТ – в форме трапеции;</li>
                    <li>ПШ – имеет форму шестиугольника;</li>
                    <li>
                        ПШД – ЖБИ в форме шестиугольника осевая диагональная;
                    </li>
                    <li>ПШП – в форме шестиугольника осевая поперечная;</li>
                    <li>
                        ДПШ — в форме половины шестиугольника осевая
                        диагональная;
                    </li>
                    <li>ППШ – поперечная часть полвины шестиугольника.</li>
                </ul>
                <p className="main_text_p">
                    Кроме буквенных значений, в маркировке также указываются
                    размеры. Для прямоугольных — длина и ширина, для
                    трапециевидных — только длина, а для шестиугольных — длина
                    диагонали. Умея читать маркировку, всегда можно определить,
                    какого типа материал – и, соответственно, для чего он
                    предназначается.
                </p>
                <h2 className="color_h2_tovpage">
                    ПРЕИМУЩЕСТВА И НЕДОСТАТКИ ПРИМЕНЕНИЯ ДОРОЖНЫХ ПЛИТ
                </h2>
                <p className="main_text_p">
                    К основным достоинствам применения, которыми обладают
                    дорожные плиты, относят:
                </p>
                <ul class="delivery_beton">
                    <li>
                        простую технологию укладки, которая увеличивает скорость
                        монтажа и упрощает выполнение строительных работ при
                        сохранении высокого качества покрытия;
                    </li>
                    <li>
                        относительно невысокую стоимость используемых
                        материалов;
                    </li>
                    <li>
                        снижение затрат на разработку грунта и сопутствующие
                        работы;
                    </li>
                    <li>
                        высокую надежность, прочность и морозостойкость
                        покрытия;
                    </li>
                    <li>
                        возможность вторичного использования материала после
                        демонтажа.
                    </li>
                </ul>
                <p className="main_text_p">
                    Основным недостатком считают наличие швов, которые не
                    позволяют получить идеально ровную поверхность. Однако
                    использование асфальта в качестве верхнего покровного слоя
                    или заделка швов строительными растворами помогает устранить
                    этот недостаток и улучшить качество поверхности.
                </p>
                <Zayavka />
            </div>
        </div>
    );
};
export default Roadplates;
