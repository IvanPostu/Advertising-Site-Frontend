import React from 'react'
import style from './BarContent.module.scss'
import { BarContentElement as Element } from './BarContentElement.jsx'

import img1 from '../../../../../../assets/images/adadddaad22.jpg'
import img2 from '../../../../../../assets/images/adafadfadfadfad.jpg'
import img3 from '../../../../../../assets/images/adfadfadf.jpg'
import img4 from '../../../../../../assets/images/afadfdafadfad.jpg'
import img5 from '../../../../../../assets/images/davadvdavadzz.jpg'
import img6 from '../../../../../../assets/images/dd.jpg'
import img7 from '../../../../../../assets/images/zzzzz33.jpg'
import img8 from '../../../../../../assets/images/zzzw13e31r.jpg'

const objs = [
    {
        img: img1,
        txt: `Требуются опытные строители с опытом работы, все подробности по номеру телефона 060000000`
    },
    {
        img: img2,
        txt: `Продам спиннеры недорого, самый разный ассортимент`
    },
    {
        img: img3,
        txt: `Фирма ---- предлагает услуги адовката, маркетолога, юриста...`
    },
    {
        img: img4,
        txt: `Продам смартфон б/у хорошее качество, низкая цена`
    },
    {
        img: img5,
        txt: `Фирма ---- предлагает ноутбуки по низким ценам`
    },
    {
        img: img6,
        txt: `На открытие ночного клуба приглашаются все желающие`
    },
    {
        img: img7,
        txt: `Ремонт автомобилей - быстро, качественно и дешего`
    },
    {
        img: img8,
        txt: `Магазин ---- предлагает самый вариативный набор книг всех жанров`
    },
]

//TO DO txt: max length 100

export default function BarContentStateless() {
    return (
        <div id={style.barContentBody}>

            {objs.map((item, index, list) => (
                <Element
                    key={index}
                    img={item.img}
                    txt={item.txt} />
            ))}


        </div>
    )
}
