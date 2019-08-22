import React from 'react'
import style from './BaseLayout.module.scss'
import gStyle from '../../../main/index.global.scss'
import { MainMenuStateless as MainMenu } from './MainMenu'

export default function BaseLayoutStateless() {

    return (
        <div>
            <div className={style.topBlockInvisible}></div>
            <div className={style.topBlockVisible}>
                <div className={gStyle.block}>

                    <MainMenu />

                </div>
            </div>
        </div>
    )
}
