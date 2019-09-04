import React from 'react'
import style from './Article.module.scss'

export default function ArticleStateless({ title, headerText, contentText }) {
    return (
        <div className={style.articleContainer}>
            <p className={style.title}>{title}</p>

            <strong className={style.headerText}>
                {headerText}
            </strong>

            <p className={style.contentText}>
                {contentText}
            </p>
        </div>
    )
}
