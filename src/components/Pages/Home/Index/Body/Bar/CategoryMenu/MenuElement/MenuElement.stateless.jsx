import React from 'react'
import style from './MenuElement.module.scss'

export default function MenuElementStateless({ parent, subMenu }) {
    const [submenuVisible, setSubmenuVisible] = React.useState(false)

    return (
        <>
            <a onClick={() => { setSubmenuVisible(a => !a) }} className={style.menuElement}>{parent}</a>
            {submenuVisible &&
                <div className={style.submenuContainer}>
                    {subMenu.map((a, index, arr) => (<a className={style.submenuElement} key={index}>{a}</a>))}
                </div>
            }
        </>
    )
}
