import React from 'react'
import { CSSTransition } from 'react-transition-group'
import animation from './CategoryMenu.anim.scss'
import style from './CategoryMenu.module.scss'
import { MenuElement } from './MenuElement'
import noSelectClass from '../../../../../../../mixins/properties/noselect.property.scss'

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

    // console.log(Math.floor(Math.random() * 10))
    return (
        <span id={style.mainBody} className={noSelectClass.noselect} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
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
                    <MenuElement
                        parent={'Транспорт'}
                        subMenu={['Легковые автомобили',
                            'Автобусы и микроавтобусы',
                            'Грузовые автомобили',
                            'Мотоциклы и мототехника',
                            'Гиперскутеры, электросамокаты']}
                    />

                    <MenuElement parent={'Недвижимость'} />
                    <MenuElement parent={'Телефоны и связь'} />
                    <MenuElement parent={'Компьютеры и оргтехника'} />
                    <MenuElement parent={'Строительство и ремонт'} />
                    <MenuElement parent={'Одежда, обувь и аксессуары'} />
                    <MenuElement parent={'Мебель и интерьер'} />
                    <MenuElement parent={'Аудио-Видео-Фото'} />
                    <MenuElement parent={'Все остальное'} />
                    <MenuElement parent={'Все для торжеств'} />
                    <MenuElement parent={'Бытовая техника'} />
                    <MenuElement parent={'Работа'} />
                    <MenuElement parent={'Услуги'} />
                </div>
            </CSSTransition>

        </span>
    )
}
