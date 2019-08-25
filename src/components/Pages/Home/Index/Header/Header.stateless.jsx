import React from 'react'
import style from './Header.module.scss'
import { TopContainerStatefull as TopContainer } from './TopContainer'
import { TopContainerSliderStatefull as Slider } from './TopContainerSlider'

export default function HeaderStateless() {
    return (
        <div>
            <TopContainer />
            <Slider />
        </div>

    )
}
