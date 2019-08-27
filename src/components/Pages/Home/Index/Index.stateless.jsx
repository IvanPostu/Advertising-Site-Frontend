import React from 'react'
import container from '../../../../mixins/properties/container.property.scss'
import { HeaderStatefull as Header } from './Header'

export default function IndexStateless() {

    return (
        <div className={container.container}>
            <Header />
            <h3>Index</h3>
        </div>
    )
}
