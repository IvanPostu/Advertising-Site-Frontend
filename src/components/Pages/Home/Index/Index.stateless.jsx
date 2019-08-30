import React from 'react'
import container from '../../../../mixins/properties/container.property.scss'
import { HeaderStatefull as Header } from './Header'
import { Body } from './Body'

export default function IndexStateless() {

    return (
        <div className={container.container}>
            <Header />
            <Body />
            <h3>Index</h3>
        </div>
    )
}
