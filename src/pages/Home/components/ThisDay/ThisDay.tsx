import React from 'react'
import GlobalSvgSelector from '../../../../images/GlobalSvgSelector'
import s from './ThisDay.module.scss'

type Props = {}

const ThisDay = (props: Props) => {
  return (
    <div className={s.this_day}>
        <div className={s.temp_and_icon}>
            <div className={s.temparature}>
                <div className={s.grad}>
                    20
                </div>
                <div className={s.day}>
                    Today
                </div>
            </div>
            <div className={s.icon}>
                <GlobalSvgSelector id={`sun`}/>
            </div>
        </div>
        <div className={s.place_and_time}>
            <div className={s.time}>
                Time: 21:40
            </div>
            <div className={s.place}>
                Berlin
            </div>
        </div>
    </div>
  )
}

export default ThisDay