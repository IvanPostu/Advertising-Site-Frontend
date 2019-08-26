import React from 'react'
// import style from './Header.module.scss'
import { TopContainerStatefull as TopContainer } from './TopContainer'
import { TopContainerSliderStatefull as Slider } from './TopContainerSlider'
import { BarStatefull as Bar } from './Bar'

export default function HeaderStateless() {
    return (
        <div>
            <TopContainer />
            <Slider />
            <Bar />
        </div>

    )
}
