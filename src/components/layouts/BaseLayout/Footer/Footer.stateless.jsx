import React from 'react'

import container from '../../../../mixins/properties/container.property.scss'
import style from './Footer.module.scss'

export default function FooterStateless() {
    return (
        <div className={style.footerBody}>

            <div className={`${container.container}`}>
                <h3>Footer</h3>
            </div>

        </div>
    )
}
