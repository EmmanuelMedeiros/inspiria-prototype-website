'use client'
  
import inspiria_text_logo from '../../public/inspiria_text_logo.svg'
import style from '../styles/staticHeader.module.css'

import localFont from 'next/font/local'
import Image from 'next/image'

import HeaderRef from '../interface/HeaderRef'

import { CiMenuFries } from "react-icons/ci";
import { FiX } from "react-icons/fi";

import { useState } from 'react'

import { useContext } from 'react'
import PageContext from '../context/pageContext'

const inriaSansBold = localFont({
    src: "../fonts/InriaSans-Bold.ttf",
    variable: "--font-geist-sans",
    weight: "100 900",
});

export default function StaticHeader({ itemRef, setOpenedMenu }: HeaderRef) {

    const pageContext = useContext(PageContext)

    const [showMenu, setShowMenu] = useState<boolean>(false)

    const scrollToSection = (offset: number) => {
        itemRef.current?.scrollTo(offset);
    };

    return(
        <div className={`${style.container} ${inriaSansBold.className}`}>
            
            <div className={`${style.static_header}`}>

                <Image
                    src={inspiria_text_logo}
                    width={300}
                    alt='inspiria_logo'
                    className={`${style.inspiria_text_logo}`}
                />

                <CiMenuFries
                    onClick={() => pageContext.setOpenedMenu(true)} 
                    className={`${!showMenu && pageContext.windowWidth != undefined && pageContext.windowWidth <= 966 ? style.hamburger_menu_icon : style.not_show}`}    
                />

                <div className={`${style.header_text} ${pageContext.windowWidth !== undefined && pageContext.windowWidth <= 966 && !showMenu ? style.not_show : null}`}>
                    <p>Início</p>
                    <p onClick={() => scrollToSection(1)}>Sobre nós</p>
                    <p>Benefícios</p>
                    <p>Serviços</p>
                    <p>Agentes Inteligentes</p>
                    <p className={`${style.button_and_text}`}>Saiba Mais</p>
                </div>

            </div>

        </div>
    )
}