import style from '../styles/staticHeader.module.css'


import inspiria_text_logo from '../../public/inspiria_text_logo.svg'
import Image from 'next/image'

export default function StaticHeader() {
    return(
        <div className={style.container}>
            
            <div className={`${style.static_header}`}>

                <Image
                    src={inspiria_text_logo}
                    width={300}
                    alt='inspiria_logo'
                    className={`${style.inspiria_text_logo}`}
                />
                
                <div className={`${style.header_text}`}>
                    <p>Início</p>
                    <p>Sobre nós</p>
                    <p>Benefícios</p>
                    <p>Serviços</p>
                    <p>Agentes Inteligentes</p>
                    <p className={`${style.button_and_text}`}>Saiba Mais</p>
                </div>

            </div>

        </div>
    )
}