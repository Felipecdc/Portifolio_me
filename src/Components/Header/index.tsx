import React, { useEffect } from "react";
import './Header.modules.scss';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';

 
const iconsColor = {
    backgroundColor: "transparent",
    border: 0,
    margin: 0
}

function Header() {

    useEffect(() => {
        AOS.init();
    }, [])

    const { t, i18n } = useTranslation();

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
    };

    return (
        <header>
            <nav className="header-container">
                <div className="header-icons">
                    <a style={iconsColor} target="_blank" href="https://www.instagram.com/felipe_castroz/" data-aos="fade-down">
                        <FaInstagram />
                    </a>
                    <a style={iconsColor} target="_blank" href="https://www.linkedin.com/in/felipe-castro-039335267/" 
                    data-aos="fade-up"  
                    data-aos-anchor-placement="center-bottom"
                    >
                        <FaLinkedin />
                    </a>
                    <a style={iconsColor} target="_blank" href="https://github.com/Felipecdc" data-aos="fade-down">
                        <FaGithub />
                    </a>
                </div>
                <div className="header-lang">
                    <select className="select" onChange={handleLanguageChange} value={i18n.language} data-aos="fade-down">
                        <option value="en">English</option>
                        <option value="pt">Português</option>
                    </select>
                </div>
            </nav>
        </header>
    );
}

export default Header;
