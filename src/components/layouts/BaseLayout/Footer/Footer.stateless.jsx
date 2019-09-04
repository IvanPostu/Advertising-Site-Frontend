import React from 'react'

import container from '../../../../mixins/properties/container.property.scss'
import style from './Footer.module.scss'

export default function FooterStateless() {
    return (
        <div className={style.footerBody}>
            <div className={`${container.container}`}>
                <div id={style.footerBodyID}>

                    <div className={style.footerBox}>
                        <div className={style.footerBoxTitle}>
                            <h2>Заголовок1</h2>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nisi sint mollitia sunt quas, quia ducimus impedit praesentium quo corporis quod omnis esse iusto sequi labore distinctio facere porro reiciendis.
                        </p>
                        <a className={style.footerBoxLink}>Link example</a>
                    </div>

                    <div className={style.footerBox}>
                        <div className={style.footerBoxTitle}>
                            <h2>Заголовок2</h2>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nisi sint mollitia sunt quas, quia ducimus impedit praesentium quo corporis quod omnis esse iusto sequi labore distinctio facere porro reiciendis.
                        </p>
                    </div>

                    <div className={style.footerBox}>
                        <div className={style.footerBoxTitle}>
                            <h2>Заголовок3</h2>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nisi sint mollitia sunt quas, quia ducimus impedit praesentium quo corporis quod omnis esse iusto sequi labore distinctio facere porro reiciendis.
                        </p>
                    </div>

                    <div className={style.footerBox}>
                        <div className={style.footerBoxTitle}>
                            <h2>Заголовок4</h2>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nisi sint mollitia sunt quas, quia ducimus impedit praesentium quo corporis quod omnis esse iusto sequi labore distinctio facere porro reiciendis.
                        </p>
                    </div>


                </div>
            </div>
        </div>
    )
}
