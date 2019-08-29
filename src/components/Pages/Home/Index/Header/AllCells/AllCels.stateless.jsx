import React from 'react'
import OneCell from './OneCell.jsx'
import style from './AllCells.module.scss'

import img1 from '../../../../../../assets/images/davadvad.jpg'
import img2 from '../../../../../../assets/images/davadvdavadzz.jpg'
import img3 from '../../../../../../assets/images/adadddaad22.jpg'
import img4 from '../../../../../../assets/images/cxzvcxzbxvzbvxz.jpg'

export default function AllCelsStateless() {
    return (
        <div id={style.allCellsContainer}>
            <OneCell downABit={false} img={img1} />
            <OneCell downABit={true} img={img2} />
            <OneCell downABit={false} img={img3} />
            <OneCell downABit={true} img={img4} />

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
