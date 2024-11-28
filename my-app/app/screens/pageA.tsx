'use client'

import StaticHeader from '../components/staticHeader'
import HeaderRef from '../interface/HeaderRef'
import style from '../styles/pageA.module.css'

export default function PageA({ itemRef }: HeaderRef) {

    return (
        <div className={style.container}>
            <StaticHeader itemRef={itemRef}/>            
        </div>
    )
}