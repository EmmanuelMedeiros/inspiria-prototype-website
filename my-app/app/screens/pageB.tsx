'use client'

import style from '../styles/pageB.module.css'
import Image from 'next/image'

import testB from '../../public/test_d.png'

export default function PageB() {

    return(
        <div  className={`${style.container} `}>
            
            <div className={`${style.wrapper}`}>
                <div className={`${style.logo_container}`}>
                    <Image
                        src={testB}
                        alt={"inspiria_pink_logo"}
                        width={950}
                        className={`${style.inspiria_pink_logo}`}
                    />
                </div>

                <div className={`${style.about_inspiria}`}>
                    <h1>SOBRE A INSPIRIA</h1>
                    <p>Somos especialistas em automação e criação de soluções personalizadas que transformam organizações e elevam experiências.</p>
                </div>
            </div>

        </div>
    )
}