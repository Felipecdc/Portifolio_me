import { FaHtml5, FaCss3, FaReact, FaJsSquare, FaNodeJs, FaFigma } from 'react-icons/fa';
import { SiPostgresql } from 'react-icons/si';
import AOS from 'aos';
import { useEffect } from 'react';

function TechIcons(){

    useEffect(() => {
        AOS.init();
    }, [])

    return(
        <>
            <a href="https://www.w3schools.com/html/" target='_blank' className='icon'>
                <FaHtml5 size={80} className='html'/>
            </a>
            <a href="https://www.w3schools.com/css/" target='_blank' className='icon'>
                <FaCss3 size={80} className='css'/>
            </a>
            <a href="https://react.dev/" target='_blank' className='icon'>
                <FaReact size={80} className='react'/>
            </a>
            <a href="https://www.javascript.com/" target='_blank' className='icon'>
                <FaJsSquare size={80} className='js'/>
            </a>
            <a href="https://nodejs.org/en" target='_blank' className='icon'>
                <FaNodeJs size={80} className='node'/>
            </a>
            <a href="https://reactnative.dev/" target='_blank' className='icon'>
                <FaReact size={80} className='react-native'/>
            </a>
            <a href="https://www.postgresql.org/" target='_blank' className='icon'>
                <SiPostgresql size={80} className='postgre'/>
            </a>
            <a href="https://www.figma.com/" target='_blank' className='icon'>
                <FaFigma size={80} className='figma'/>
            </a>
        </>

    )
}

export default TechIcons;