import style from '../styles/fixedHeader.module.css'

import inspiriaPinkLogo from '../../public/inspiria_pink_logo.png'
import Image from 'next/image'


export default function FixedHeader() {
    return(
        <div className={`${style.container}`}>
        
            <Image
                src={inspiriaPinkLogo}
                width={40}
                className={`${style.inspiria_logo} hover:animate-pulse`}
                alt='inspiria_logo'
            />

            <div className={`${style.fixed_header_items}`}>
                
                <div className='flex gap-5'>
                    <p>Início</p>
                    <p>Sobre nós</p>
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