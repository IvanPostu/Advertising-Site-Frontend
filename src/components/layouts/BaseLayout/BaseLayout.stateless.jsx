import React from 'react'
import style from './BaseLayout.module.scss'
import { MainMenuStateless as MainMenu } from './MainMenu'
import { AccountMenuStateless as AccountMenu } from './AccountMenu'
import container from '../../../mixins/properties/container.property.scss'
import noSelect from '../../../mixins/properties/noselect.property.scss'

export default function BaseLayoutStateless() {

    return (
        <div className={noSelect.noselect}>
            <div className={style.topBlockInvisible}></div>
            <div className={style.topBlockVisible}>
                <div className={container.container}>

                    <MainMenu />
                    <AccountMenu />

                </div>
            </div>
        </div>
    )
}
