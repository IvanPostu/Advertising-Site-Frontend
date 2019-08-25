import React, { Component } from 'react'
import TopContainerStateless from './TopContainerSlider.stateless.jsx'

export default class TopContainerSliderStatefull extends Component {
    constructor(props) {
        super(props)

    }

    get TopContainerStatelessMaxElements() {
        return 5
        //TO DO: чтобы изменить константу,  надо будет изменить стэйтлесс компонент
    }


    render() {
        return <TopContainerStateless />
    }
}
