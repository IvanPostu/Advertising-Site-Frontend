import React from 'react'
import gStyle from '../../../../main/index.global.scss'
import { HeaderStatefull as Header } from './Header'

export default function IndexStateless() {

    return (
        <div className={gStyle.block}>
            <Header />
            <h3>Index</h3>
        </div>
    )
}
