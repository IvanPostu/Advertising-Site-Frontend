import React from 'react'
import style from './AccountMenu.module.scss'
import { Transition } from 'react-transition-group';

export default React.memo(AccountMenuStateless)

function AccountMenuStateless() {
    const [visible, setVisible] = React.useState(false)

    /////////////////////// Logic for event click extern \\\\\\\\\\\\\\\\\\\\\\\\\\\
    const [mouseIn, setMouseIn] = React.useState({ val: false })//object used for mutations (not invoke render)
    const clickExternCheck = () => {
        if (!mouseIn.val) setVisible(a => false)
        //if a == false and set a false, do not call method render() beacuse using React.memo!!!
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
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>

            <a className={style.AbtnBase} onClick={() => { setVisible(!visible) }}>
                Авторизация
                <svg
                    style={{ marginLeft: '3px' }}
                    width="14" height="12">
                    <path
                        d="M 4,0 L 7,5 L 10,0 z"
                        fill="#f6f6f8"
                        stroke="#f6f6f8"
                        strokeWidth="6" />
                </svg>
            </a>

            <Fade in={visible} />


        </div >
    )
}

////////////////////////////////// ANIMATION \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const duration = 200;

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
