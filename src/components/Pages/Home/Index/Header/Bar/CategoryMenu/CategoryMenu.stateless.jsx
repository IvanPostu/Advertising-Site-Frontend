import React from 'react'
import { CSSTransition } from 'react-transition-group'
import animation from './CategoryMenu.anim.scss'
import style from './CategoryMenu.module.scss'


export default React.memo(CategoryMenuStateless)

function CategoryMenuStateless() {
    const [menuVisible, setMenuVisible] = React.useState(false)

    /////////////////////// Logic for event click extern \\\\\\\\\\\\\\\\\\\\\\\\\\\
    const [mouseIn, setMouseIn] = React.useState({ val: false })//object used for mutations (not invoke render)
    const clickExternCheck = () => {
        if (!mouseIn.val) setMenuVisible(false)
    }
    React.useEffect(() => {
        document.getElementsByTagName('body')[0].addEventListener('click', clickExternCheck)
        return () => document.getElementsByTagName('body')[0].removeEventListener('click', clickExternCheck)
    }, [])
    const onMouseEnter = () => {
        setMouseIn(a => {
            const b = a
            b.val = true
            return b
        })
    }
    const onMouseLeave = () => {
        setMouseIn(a => {
            const b = a
            b.val = false
            return b
        })
    }
    //////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


    return (
        <span id={style.mainBody} style={{ minWidth: '25%' }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <button onClick={() => { setMenuVisible(a => !a) }} id={style.categoryBtn}>
                Категории

                <svg
                    style={{ marginLeft: '5px' }}
                    width="14" height="12">
                    <path
                        d="M 4,0 L 7,6 L 10,0 z"
                        fill="#f6f6f8"
                        stroke="#f6f6f8"
                        strokeWidth="6" />
                </svg>
            </button>

            <CSSTransition in={menuVisible} classNames={animation} timeout={200} unmountOnExit>
                <div id={style.ddownMenu}>
                    <a className={style.menuElement}>Транспорт </a>
                    <a className={style.menuElement}>Недвижимость</a>
                    <a className={style.menuElement}>Телефоны и связь</a>
                    <a className={style.menuElement}>Компьютеры и оргтехника</a>
                    <a className={style.menuElement}>Строительство и ремонт</a>
                    <a className={style.menuElement}>Одежда, обувь и аксессуары</a>
                    <a className={style.menuElement}>Мебель и интерьер</a>
                    <a className={style.menuElement}>Аудио-Видео-Фото</a>
                    <a className={style.menuElement}>Все остальное</a>
                    <a className={style.menuElement}>Все для торжеств</a>
                    <a className={style.menuElement}>Бытовая техника</a>
                    <a className={style.menuElement}>Работа</a>
                    <a className={style.menuElement}>Услуги</a>
                </div>
            </CSSTransition>

        </span>
    )
}
