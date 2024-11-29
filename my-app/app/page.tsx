'use client'

import { useEffect, useRef } from "react";

import InspiringBlock from "./components/inspiringBlock";
import PageA from "./screens/pageA";
import PageB from "./screens/pageB";

import inspiria_text_logo from '../public/inspiria_text_logo.svg'

import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import FixedHeader from "./components/fixedHeader";
import PageSection from "./enum/PageSection";

import hamburgerMenuStyle from './styles/staticHeader.module.css'

import { useContext } from "react";
import PageContext from "./context/pageContext";

import { FiX } from "react-icons/fi";
import Image from "next/image";

export default function Home() {

  const pageContext = useContext(PageContext)
  const parallaxRef = useRef<IParallax>(null)

  const scrollToSection = (offset: number) => {
    parallaxRef.current?.scrollTo(offset);
  };

  function scrollListener() {
    const container = parallaxRef.current?.container
        .current as HTMLDivElement

    container.onscroll = () => {
        pageContext.setScrollY(parallaxRef.current?.current)
    }
    return () => {
        container.onscroll = null
    }
  }
  
  useEffect(scrollListener, [])

  useEffect(() => {
    pageContext.setWindowWidth(window.innerWidth)
  }, [])

  useEffect(() => {

    if(pageContext.scrollY != undefined) {

      if(window.innerHeight - pageContext.scrollY >= window.innerHeight - 100) {
        pageContext.setCurrentSection(PageSection.Home)
      } else if(window.innerHeight - pageContext.scrollY <= window.innerHeight - window.innerHeight + 50)
        pageContext.setCurrentSection(PageSection["About Us"])
    }

  }, [pageContext.scrollY])

  useEffect(() => {
    addEventListener('resize', () => pageContext.setWindowWidth(window.innerWidth))
  }, [pageContext.windowWidth])

  return(
    <>
      <Parallax 
        pages={2}
        ref={parallaxRef}
        config={{
          tension: 120
        }}
      >

        <ParallaxLayer 
          factor={1.2}
          style={{background: "linear-gradient(90deg, rgba(32,189,246,1) 0%, rgba(121,39,225,1) 60%, rgba(253,21,160,1) 100%)", backgroundSize: 'cover'}}
        >
          <PageA 
            itemRef={parallaxRef}
          />
        </ParallaxLayer>
        
        <ParallaxLayer 
          speed={-.4}
          className="mt-[10rem]"
        >
          <InspiringBlock/>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={1}
          speed={.2}
        >
          <PageB/>
        </ParallaxLayer>

      </Parallax>


      <div className={`${pageContext.scrollY == undefined || pageContext.scrollY < 300 ? 'opacity-0 pointer-events-none' : 'opacity-100'} transition-opacity duration-1000`}>
        <FixedHeader 
          itemRef={parallaxRef}
        />
      </div>

      <div id={`${!pageContext.openedMenu ? hamburgerMenuStyle.not_show : ''}`} className={`${!pageContext.openedMenu ? hamburgerMenuStyle.closed_menu : hamburgerMenuStyle.oppened_menu}`}>

        <FiX
          onClick={() => pageContext.setOpenedMenu(false)}
          className={`${hamburgerMenuStyle.close_button}`}
        />

        <div className={`${hamburgerMenuStyle.hamburger_menu}`}>

          <Image
            src={inspiria_text_logo}
            width={300}
            alt='inspiria_logo'
            className={`${hamburgerMenuStyle.opened_menu_inspiria_logo}`}
          />

          <p onClick={() => {scrollToSection(0)
                            pageContext.setOpenedMenu(false)                            
                      }}>Início
          </p>
          <p onClick={() => {scrollToSection(1)
                            pageContext.setOpenedMenu(false)                            
                      }}>Sobre nós
          </p>
          <p>Benefícios</p>
          <p>Serviços</p>
          <p>Agentes Inteligentes</p>
          <p className={`${hamburgerMenuStyle.button_and_text}`}>Saiba Mais</p>

        </div>

      </div>

    </>
  )
}