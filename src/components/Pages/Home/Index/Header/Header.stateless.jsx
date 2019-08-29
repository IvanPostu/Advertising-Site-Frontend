import React from 'react'
// import style from './Header.module.scss'
import { TopContainerStatefull as TopContainer } from './TopContainer'
import { TopContainerSliderStatefull as Slider } from './TopContainerSlider'
import { BarStatefull as Bar } from './Bar'
import { Cells } from './AllCells'

export default function HeaderStateless() {
    return (
        <div>
            <TopContainer />
            <Slider />
            <Cells />
            <Bar />
        </div>

    )
}
