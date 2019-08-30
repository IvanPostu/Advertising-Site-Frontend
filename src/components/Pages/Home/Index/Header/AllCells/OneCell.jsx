import React from 'react'
import style from './AllCells.module.scss'

export default function OneCell({ downABit, content }) {
    return (
        <div className={`${style.oneCell} ${downABit ? style.downABit : ''}`}
            style={{ background: `url(${content.img})`, backgroundSize: '100% 100%' }}>
            <div className={style.contentBox}>
                <p>{content.title}</p>
            </div>

            {/* <img src={content.img} width={'100%'} height={'100%'} alt="" /> */}

        </div>
    )
}
