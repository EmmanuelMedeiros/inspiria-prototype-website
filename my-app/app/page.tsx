'use client'

import { useEffect, useRef, useState } from "react";
import InspiringBlock from "./components/inspiringBlock";
import PageA from "./screens/pageA";
import PageB from "./screens/pageB";

import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import FixedHeader from "./components/fixedHeader";

export default function Home() {

  const [scrollY, setScrollY]  = useState<number>()
  const parallaxRef = useRef<IParallax>(null)

  function scrollListener() {
    const container = parallaxRef.current?.container
        .current as HTMLDivElement

    container.onscroll = () => {
        setScrollY(parallaxRef.current?.current)
    }
    return () => {
        container.onscroll = null
    }
  }
  
  useEffect(scrollListener, [])

  useEffect(() => {
    console.log(scrollY)
  }, [scrollY])

  return(
    <>
      <Parallax 
        pages={2}
        ref={parallaxRef}
        >

        <ParallaxLayer
        factor={1.2}
        
          style={{background: "linear-gradient(90deg, rgba(32,189,246,1) 0%, rgba(121,39,225,1) 60%, rgba(253,21,160,1) 100%)", backgroundSize: 'cover'}}
          >
          <PageA/>
        </ParallaxLayer>
        
        <ParallaxLayer 
            speed={-.4}
            className="mt-[10rem]"
          >
          <InspiringBlock/>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={1}
          speed={.2}>
          <PageB/>
        </ParallaxLayer>

      </Parallax>
      

      <div className={`${scrollY == undefined || scrollY < 300 ? 'opacity-0 pointer-events-none -translate-y-[10rem]' : 'opacity-100'} transition-opacity duration-1000`}>
        <FixedHeader/>
      </div>

    </>
  )
}