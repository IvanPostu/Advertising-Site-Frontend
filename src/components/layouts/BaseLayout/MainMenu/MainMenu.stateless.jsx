import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { Link } from 'react-router-dom'
import style from './MainMenu.module.scss'
import animation from './MainMenu.animation.scss'


export default function MainMenuStateless() {

    const [menuIsVisible, setMenuVisible] = React.useState(false)

    return (
        <div>
            <MainMenuButton handleClick={() => { setMenuVisible(!menuIsVisible) }} />

            <div className={style.DdownMenuMax}>
                <Links />
            </div>


            <CSSTransition
                in={menuIsVisible}
                timeout={330}
                classNames={animation}
                unmountOnExit
            >

                <div className={style.DdownMenuMin}>
                    <Links />
                </div>

            </CSSTransition>

        </div>
    )
}




const MainMenuButton = (props) => (
    <div className={style.squareBtn}  >
        <a onClick={props.handleClick}>
            <svg width="30" height="30">
                <path d="M0,5 30,5" stroke="rgb(221, 211, 233)" strokeWidth="5" />
                <path d="M0,14 30,14" stroke="rgb(221, 211, 233)" strokeWidth="5" />
                <path d="M0,23 30,23" stroke="rgb(221, 211, 233)" strokeWidth="5" />
            </svg>
        </a>
    </div>
)



const Links = () => (
    <div>
        <Link className={style.aClass} to={"/home/index"} >Главная</Link>
        <Link className={style.aClass} to={"/home/about"} >О нас</Link>

        {/* <a className={style.aClass} >Главная</a>
        <a className={style.aClass} >О нас</a> */}
        <a className={style.aClass} >Советы</a>
        <a className={style.aClass} >Контакты</a>
        <a className={style.aClass} >Услуги</a>
        <a className={style.aClass} >Личный кабинет</a>

    </div>
)





