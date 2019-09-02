import React from 'react'
import style from './BarContent.module.scss'

function priceResult(price, valuta) {
    if (price === undefined || valuta === undefined) return `Цена: -`
    return `Цена: ${price} ${valuta}`
}

const BarContentElement = ({ img, txt, price, valuta }) => (
    <div className={style.contentBox}>
        <div className={style.imgBox}
            style={{ background: `url(${img})`, backgroundSize: '100% 100%' }}></div>

        <div className={style.txtBox}>{txt}</div>

        <div className={style.priceBox}>{priceResult(price, valuta)}</div>
        <div className={style.boxForBtn}>
            <button className={style.btn}>
                {`Подробнее`}
            </button>
        </div>
    </div>
)

export { BarContentElement }