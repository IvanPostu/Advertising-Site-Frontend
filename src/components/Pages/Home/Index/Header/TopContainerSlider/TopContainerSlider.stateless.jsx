import React from 'react'
import style from './TopContainerSlider.module.scss'
import img1 from '../../../../../../assets/testImgs/1.jpg'
import img2 from '../../../../../../assets/testImgs/2.jpg'
import img3 from '../../../../../../assets/testImgs/3.jpg'
import img4 from '../../../../../../assets/testImgs/4.jpg'
import img5 from '../../../../../../assets/testImgs/5.jpg'

const selectedBar = 'red'
const notSelectedBar = 'rgba(255, 255, 255, 0.6)'

export default function TopContainerSliderStateless() {
    const [margin, setMargin] = React.useState(0)

    React.useEffect(() => {
        const interval = setInterval(() => {
            setMargin(a => a === -80 ? 0 : a - 20)
        }, 3000)

        return () => clearInterval(interval)
    }, [])


    return (
        <div id={style.sliderContainer}>

            <div className={style.slides}>

                <div className={style.slide} id={style.s1} style={{ marginLeft: `${margin}%` }}>
                    <img src={img1} alt="" />
                </div>
                <div className={style.slide}>
                    <img src={img2} alt="" />
                </div>
                <div className={style.slide}>
                    <img src={img3} alt="" />
                </div>
                <div className={style.slide}>
                    <img src={img4} alt="" />
                </div>
                <div className={style.slide}>
                    <img src={img5} alt="" />
                </div>



            </div>


            <div className={style.navigation}>
                <div style={{ borderColor: margin === 0 ? selectedBar : notSelectedBar }} className={style.bar} onClick={() => { setMargin(0) }}></div>
                <div style={{ borderColor: margin === -20 ? selectedBar : notSelectedBar }} className={style.bar} onClick={() => { setMargin(-20) }}></div>
                <div style={{ borderColor: margin === -40 ? selectedBar : notSelectedBar }} className={style.bar} onClick={() => { setMargin(-40) }}></div>
                <div style={{ borderColor: margin === -60 ? selectedBar : notSelectedBar }} className={style.bar} onClick={() => { setMargin(-60) }}></div>
                <div style={{ borderColor: margin === -80 ? selectedBar : notSelectedBar }} className={style.bar} onClick={() => { setMargin(-80) }}></div>
            </div>



        </div>
    )
}
