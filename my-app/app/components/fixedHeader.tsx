'use client'

import style from '../styles/fixedHeader.module.css'
import inspiriaPinkLogo from '../../public/inspiria_pink_logo.png'

import Image from 'next/image'
import HeaderRef from '../interface/HeaderRef'
import PageSection from '../enum/PageSection'

import { useContext } from "react";
import PageContext from '../context/pageContext'

export default function FixedHeader({ itemRef }: HeaderRef) {

    const pageContext = useContext(PageContext)

    const scrollToSection = (offSet: number) => {
        itemRef.current?.scrollTo(offSet)
    }

    return(
        <div className={`${style.container}`}>
        
            <Image
                onClick={() => scrollToSection(0)}
                src={inspiriaPinkLogo}
                width={40}
                className={`${style.inspiria_logo} hover:animate-pulse`}
                alt='inspiria_logo'
            />

            <div className={`${style.fixed_header_items}`}>
                
                <div className='flex gap-5'>
                    <p onClick={() => scrollToSection(0)}>Início</p>
                    <p
                        style={pageContext.currentSection == PageSection['About Us'] ? {opacity: 1, textDecoration: 'underline'} : {}} 
                        className={``}>Sobre nós</p>
                    <p>Benefícios</p>
                </div>

                <div className='flex gap-5'>
                    <p>Serviços</p>
                    <p>Agentes Inteligentes</p>
                </div>

            </div>
        </div>
    )
}