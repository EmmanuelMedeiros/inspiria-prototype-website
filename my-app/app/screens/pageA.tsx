'use client'

import { useState } from 'react';
import StaticHeader from '../components/staticHeader'
import style from '../styles/pageA.module.css'

import localFont from "next/font/local";
import { NextFontWithVariable } from 'next/dist/compiled/@next/font';


const italianaRegular = localFont({
    src: '../fonts/Italiana-Regular.ttf',
    variable: '--italiana-regular'
})

const geistSans = localFont({
    src: "../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

const inriaSansBold = localFont({
    src: "../fonts/InriaSans-Bold.ttf",
    variable: "--font-geist-sans",
    weight: "100 900",
});

const chakraBold = localFont({
    src: "../fonts/ChakraPetch-Bold.ttf",
    variable: "--font-geist-sans",
    weight: "100 900",
});

const dancingScript = localFont({
    src: "../fonts/DancingScript-Bold.ttf",
    variable: "--font-geist-sans",
    weight: "100 900",
});

const dotoRounded = localFont({
    src: "../fonts/Doto_Rounded-Bold.ttf",
    variable: "--font-geist-sans",
    weight: "100 900",
});

const hubotSans = localFont({
    src: "../fonts/HubotSans_Condensed-Bold.ttf",
    variable: "--font-geist-sans",
    weight: "100 900",
});

const tekoBold = localFont({
    src: "../fonts/Teko-Bold.ttf",
    variable: "--font-geist-sans",
    weight: "100 900",
});


interface FontChoice {
    number: number,
    font: NextFontWithVariable
}

export default function PageA() {

    const [currentFont, setCurrentFont] = useState<FontChoice>({number: 0, font: italianaRegular})

    const fontSwitchingInterval = setInterval(fontSwitching, 1000)

    function fontSwitching() {
        switch(currentFont.number) {
            case 0: 
                setCurrentFont({number: 1, font: geistSans})
                break;
            case 1: 
                setCurrentFont({number: 2, font: italianaRegular})
                break;
            case 2: 
                setCurrentFont({number: 3, font: chakraBold})
                break;
            case 3: 
                setCurrentFont({number: 4, font: dancingScript})
                break;
            case 4: 
                setCurrentFont({number: 5, font: dotoRounded})
                break;
            case 5: 
                setCurrentFont({number: 7, font: hubotSans})
                break;
            case 6: 
                setCurrentFont({number: 0, font: tekoBold})
                break;
        }

        clearInterval(fontSwitchingInterval)
    }


    return (
        <div className={style.container}>
            <StaticHeader/>
        </div>
    )
}