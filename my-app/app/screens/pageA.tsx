'use client'

import StaticHeader from '../components/staticHeader'
import style from '../styles/pageA.module.css'

export default function PageA() {

    return (
        <div className={style.container}>
            <StaticHeader/>
        </div>
    )
}