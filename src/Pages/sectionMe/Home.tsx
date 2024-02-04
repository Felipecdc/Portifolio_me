import React, { useEffect, useState } from 'react';
import './Home.modules.scss';
import i18n from '../../i18n';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useTranslation } from 'react-i18next';
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';

import Header from '../../Components/Header';
import Presentation from '../Hooks/Presentation';
import About from '../Hooks/About';

function Home() {

  const { t } = useTranslation();
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    AOS.init();

    const handleScrol = () => {
      const scrolly = window.scrollY;
      setIsTop( scrolly === 0 || scrolly < 300 );
    }

    window.addEventListener('scroll', handleScrol);

  }, []) 

  function changeLanguage(value: string): void {
    console.log(value);
    i18n.changeLanguage(value)
      .then(() => {
        console.log("alterou");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <Header/>
      <section className='hello-container' data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="50">
        <Presentation/>
      </section>
      <div className='view-more-container'>
        { isTop ? (
          <>
            <span>{t("View more")}</span>
            <BiSolidDownArrow />
          </>
          ) : (
          <>
            <BiSolidUpArrow />
          </>
          )
        }
      </div>
      <section className='about-me' data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="50">
        <About/>
      </section>
    </>

  );
}

export default Home;