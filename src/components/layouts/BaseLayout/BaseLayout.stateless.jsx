import React from 'react'
import style from './BaseLayout.module.scss'
import gStyle from '../../../main/index.global.scss'
import { MainMenuStateless as MainMenu } from './MainMenu'
import { AccountMenuStateless as AccountMenu } from './AccountMenu'

export default function BaseLayoutStateless() {

    return (
        <div className={gStyle.noselect}>
            <div className={style.topBlockInvisible}></div>
            <div className={style.topBlockVisible}>
                <div className={gStyle.block}>

                    <MainMenu />
                    <AccountMenu />

                </div>
            </div>
        </div>
    )
}
