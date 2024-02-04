import { useEffect } from 'react';
import './style.modules.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { MdKeyboardDoubleArrowUp } from 'react-icons/md';

function NavigationButton(){

    useEffect(() => {
        AOS.init();
    }, []) 

    function ScrollToTop(){
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return(
        <div className="container-nav" data-aos="fade-up">
            <button className='up' onClick={ScrollToTop}>
                <MdKeyboardDoubleArrowUp color='#000' size={30}/>
            </button>
            <button className='contact'>
                Contact me
            </button>
        </div>
    )
}

export default NavigationButton