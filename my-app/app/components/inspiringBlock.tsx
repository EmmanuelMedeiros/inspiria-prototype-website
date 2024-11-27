'use client'
import style from '../styles/pageA.module.css'
import { NextFontWithVariable } from "next/dist/compiled/@next/font";

import localFont from "next/font/local";
import { useState } from "react";

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

export default function InspiringBlock() {
    
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
                setCurrentFont({number: 6, font: hubotSans})
                break;
            case 6: 
                setCurrentFont({number: 0, font: tekoBold})
                break;
        }

        clearInterval(fontSwitchingInterval)
    }

    return(

        <div className={`${style.container}`}>
            <div className={`${style.inspiring_block}`}>

            <div className={`${style.inspiring_text} ${inriaSansBold.className}`}>
                <h1>INSPIRANDO <span className={`${currentFont.font.className}`}> SOLUÇÕES </span> INOVADORAS</h1>
                <p>Combinamos tecnologia e estratégia para transformar o futuro dos negócios.</p>
            </div>

            <button className={`${inriaSansBold.className}`}>
                INSPIRE-SE
            </button>
        </div>

    </div>
    )
}