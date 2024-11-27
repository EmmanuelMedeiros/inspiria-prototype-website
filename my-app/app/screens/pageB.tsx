'use client'

import { useEffect, useState } from 'react'
import style from '../styles/pageB.module.css'
import Image from 'next/image'

import inspiriaPinkLogo from '../../public/inspiria_pink_logo.png'

export default function PageB() {

  const [scrollY, setScrollY] = useState(0)

  const handleScrollY = () => {
    setScrollY(document.documentElement.scrollTop)
    }

useEffect(() => {
    window.addEventListener('scroll', handleScrollY)

    console.log(scrollY)
}, [])

    return(
        <div className={`${style.container}`}>
            
            <div className={`${style.wrapper}`}>
                <div className={`${style.logo_container}`}>
                    <Image
                        src={inspiriaPinkLogo}
                        alt={"inspiria_pink_logo"}
                        width={300}
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