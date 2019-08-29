import React from 'react'
import style from './Bar.module.scss'
import { CategoryMenuStatefull as CategoryMenu } from './CategoryMenu'
import { SearchBox } from './SearchBox'
// import { MiniMenu } from './MiniMenu'

export default React.memo(BarStateless)

function BarStateless() {

    return (
        <div id={style.sBar}>
            <CategoryMenu />
            <SearchBox />
            {/* <MiniMenu /> */}

        </div>
    )
}
