import React from 'react'
import OneCell from './OneCell.jsx'
import style from './AllCells.module.scss'
import noselect from '../../../../../../mixins/properties/noselect.property.scss'

import img1 from '../../../../../../assets/images/davadvad.jpg'
import img2 from '../../../../../../assets/images/davadvdavadzz.jpg'
import img3 from '../../../../../../assets/images/adadddaad22.jpg'
import img4 from '../../../../../../assets/images/cxzvcxzbxvzbvxz.jpg'

const objs = [{
    img: img1,
    title: 'Работа',

}, {
    img: img2,
    title: 'Компьютеры',

}, {
    img: img3,
    title: 'Ремонт',

}, {
    img: img4,
    title: 'Аксессуары',

}]

export default function AllCelsStateless() {
    return (
        <div className={noselect.noselect} id={style.allCellsContainer}>
            <OneCell downABit={false} content={objs[0]} />
            <OneCell downABit={true} content={objs[1]} />
            <OneCell downABit={false} content={objs[2]} />
            <OneCell downABit={true} content={objs[3]} />

            {/* <OneCell downABit={false} />
            <OneCell downABit={true} />
            <OneCell downABit={false} />
            <OneCell downABit={true} />

            <OneCell downABit={false} />
            <OneCell downABit={true} />
            <OneCell downABit={false} />
            <OneCell downABit={true} /> */}
        </div>
    )
}
