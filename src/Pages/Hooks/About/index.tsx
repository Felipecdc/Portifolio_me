import React, { useEffect } from 'react';
import './style.modules.scss';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';

import TechIcons from '../../../Components/Techs';

function About(){

    const { t } = useTranslation();
 
    useEffect(() => {
        AOS.init();
    }, [])

    return( 
        <div className='about-me-container'>
            <div 
            className='container-photo' 
            data-aos="fade-up-right"
            data-aos-offset="200"
            data-aos-delay="200"
            > 
                <div className='photo'>
                    <h1>My photo</h1>
                </div>
            </div> 
            <div 
            className='container-text'
            data-aos="fade-up-left"
            data-aos-offset="200"
            data-aos-delay="200"
            >
                <div className='who-am-i'>
                    <h1>
                        <span style={{color: 'white'}}>{t("Who")} </span>
                        {t("am i")}
                        <span style={{color: 'white'}}> ?</span>
                    </h1>
                    <p>{t("E ai, de boa? Meu nome é Felipe Castro, e te digo ser uma pessoa que se atrai pela telinha do computador.")}
                        <br/>
                        {t("Me aprimorei na area de desenvolvimento full stack cursando análise e desenvolvimento de sistemas na faculdade Estácio de Sá, e outros cursos por fora, onde realmente tive um avanço em meus projetos, desenvolvendo aplicativos mobiles, websites e outras sistemas end to end.")}
                        <br/>
                        {t("Eu sempre priorizo o UX em meus desenvolvimentos, mantendo um facil uso no sistema. Para que um software seja classificado como bom, em minha opinião devera ser minimalista, intuitivo, funcional e atrativo ao usuario, evitando com que o usuario gaste muitos bytes para entender o que foi transmitido.")} 
                    </p>
                </div>
                <a className='curriculo' href="../Assets/Curriculo.pdf" download>
                    {t("Baixar CV")}
                </a>
            </div>
        </div>
    )
}

export default About;