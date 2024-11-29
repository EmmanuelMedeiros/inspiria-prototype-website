'use client'

import StaticHeader from '../components/staticHeader'
import HeaderRef from '../interface/HeaderRef'
import style from '../styles/pageA.module.css'

export default function PageA({ itemRef, setOpenedMenu }: HeaderRef) {

    return (
        <div className={style.container}>
            <StaticHeader 
                itemRef={itemRef}
                setOpenedMenu={setOpenedMenu}
            />            
        </div>
    )
}