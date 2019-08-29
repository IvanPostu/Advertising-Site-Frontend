import React from 'react'
import style from './AllCells.module.scss'

export default function OneCell({ downABit, img }) {
    return (
        <div className={`${style.oneCell} ${downABit ? style.downABit : ''}`}>
            <img src={img} width={'100%'} height={'100%'} alt="" />
            <div className={style.contentBox}>a</div>
        </div>
    )
}
