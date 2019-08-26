import React from 'react'
import style from './Bar.module.scss'
import { CategoryMenuStatefull as CategoryMenu } from './CategoryMenu'

export default React.memo(BarStateless)

function BarStateless() {

    return (
        <div id={style.sBar}>
            <CategoryMenu />
            {/* <div id={style.sBarInternFlexBox}>d</div> */}
        </div>
    )
}
