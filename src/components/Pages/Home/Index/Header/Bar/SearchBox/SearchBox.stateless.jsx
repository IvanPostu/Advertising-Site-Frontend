import React from 'react'
import style from './SearchBox.module.scss'

export default function SearchBoxStateless() {
    return (
        <div id={style.searchBoxContainer}>
            <input id={style.searchInput} type="text" />
            <button id={style.btnFind}>Поиск</button>
        </div>
    )
}
