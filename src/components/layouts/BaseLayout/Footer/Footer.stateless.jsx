import React from 'react'

import container from '../../../../mixins/properties/container.property.scss'
import style from './Footer.module.scss'

export default function FooterStateless() {
    return (
        <div className={style.footerBody}>
            <div className={`${container.container}`}>
                <div id={style.footerBodyID}>

                    <div className={style.footerBox}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nisi sint mollitia sunt quas, quia ducimus impedit praesentium quo corporis quod omnis esse iusto sequi labore distinctio facere porro reiciendis.
                    </div>

                    <div className={style.footerBox}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nisi sint mollitia sunt quas, quia ducimus impedit praesentium quo corporis quod omnis esse iusto sequi labore distinctio facere porro reiciendis.
                    </div>

                    <div className={style.footerBox}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nisi sint mollitia sunt quas, quia ducimus impedit praesentium quo corporis quod omnis esse iusto sequi labore distinctio facere porro reiciendis.
                    </div>

                    <div className={style.footerBox}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nisi sint mollitia sunt quas, quia ducimus impedit praesentium quo corporis quod omnis esse iusto sequi labore distinctio facere porro reiciendis.
                    </div>

                </div>
            </div>
        </div>
    )
}
