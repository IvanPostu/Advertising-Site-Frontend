import React from 'react'
import container from '../../../../mixins/properties/container.property.scss'
import style from './About.module.scss'

import { Article } from './Article/'

export default function AboutStateless() {
    return (
        <div className={container.container}>
            <div id={style.aboutBody}>

                <div id={style.containerForArticles}>
                    <Article title={'Title Example 1'} headerText={'weqfh jwehfjweh jfhwjehj hfjwehfjqweh jhewjhf jkwehfkjwqeh kjfhwkjqeh kjfhwqekjhf kjhwqejk f'} contentText={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse nihil praesentium reprehenderit impedit, porro mollitia sed, illo dolorum ex sapiente adipisci, est soluta corrupti doloremque aspernatur dolore iure excepturi atque'}
                    />
                    <Article title={'Title Example 2'} />
                </div>

                <div id={style.leftContent}>
                    <Article title={'Hello1'} />
                    <Article title={'Hello2'} />
                </div>

            </div>
        </div>
    )
}
