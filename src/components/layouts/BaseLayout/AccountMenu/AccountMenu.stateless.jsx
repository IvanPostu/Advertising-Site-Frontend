import React from 'react'
import style from './AccountMenu.module.scss'
import { Transition } from 'react-transition-group';


export default function AccountMenuStateless() {
    const [visible, setVisible] = React.useState(false)

    return (
        <div>
            <a className={style.AbtnBase} onClick={() => { setVisible(!visible) }}>
                Авторизация
                <svg style={{ backgroundColor: 'none', transform: 'rotate(180deg)' }}
                    width="40" height="12">
                    <path
                        d="M 22,20 L 30,7 L 38,20 z"
                        fill="#f6f6f8"
                        stroke="#f6f6f8"
                        strokeWidth="6" />
                </svg>
            </a>

            <Fade in={visible} />


        </div>
    )
}


const duration = 300;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
}

const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 1 },
};

const Fade = ({ in: inProp }) => (
    <Transition in={inProp} timeout={duration} unmountOnExit>
        {state => (
            <div style={{
                ...defaultStyle,
                ...transitionStyles[state]
            }}>
                <div className={style.accountMenu}>
                    <a className={style.accountMenuElement} >Вход</a>
                    <a className={style.accountMenuElement} >Регистрация</a>
                </div>
            </div>
        )}
    </Transition>
);
