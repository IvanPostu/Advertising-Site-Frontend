import React from 'react'
import style from './TopContainer.module.scss'

export default function TopContainerStateless() {
    return (
        <div id={style.base_container_head}>
            <div className={style.logoContainer} >

            </div>
            <div className={style.logoContainer} >
                <button className={style.btn01}>Новинки</button>
                <button className={style.btn01}>Спец. Предложения</button>
                <button className={style.btn01}>Популярное</button>
            </div>


        </div>
    )
}
