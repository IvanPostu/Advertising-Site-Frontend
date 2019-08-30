import React from 'react'
import style from './BarContent.module.scss'


const BarContentElement = ({ img, txt }) => (
    <div className={style.contentBox}>
        <div className={style.imgBox}
            style={{ background: `url(${img})`, backgroundSize: '100% 100%' }}></div>

        <div className={style.txtBox}>{txt}</div>

        <div className={style.priceBox}></div>
        <div className={style.btnBox}></div>
    </div>
)

export { BarContentElement }