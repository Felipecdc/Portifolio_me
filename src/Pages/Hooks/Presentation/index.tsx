import React, { useEffect } from "react";
import './style.modules.scss';
import i18n from '../../../i18n';
import { useTranslation } from 'react-i18next';

function Presentation(){

    const { t } = useTranslation();

    return(
        <main className='info-content'> 
            <h1 className='hello'>{t("Ola,")}</h1>
            <h1 className='name'>{t("Eu sou Felipe")}<span> Castro</span></h1>
            <h1 className='more'>{t("Desenvolvedor Full-stack")}</h1>
        </main>
    )
}

export default Presentation; 