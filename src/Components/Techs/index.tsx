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
                <FaHtml5 className='html'/>
            </a>
            <a href="https://www.w3schools.com/css/" target='_blank' className='icon'>
                <FaCss3 className='css'/>
            </a>
            <a href="https://react.dev/" target='_blank' className='icon'>
                <FaReact className='react'/>
            </a>
            <a href="https://www.javascript.com/" target='_blank' className='icon'>
                <FaJsSquare className='js'/>
            </a>
            <a href="https://nodejs.org/en" target='_blank' className='icon'>
                <FaNodeJs className='node'/>
            </a>
            <a href="https://reactnative.dev/" target='_blank' className='icon'>
                <FaReact className='react-native'/>
            </a>
            <a href="https://www.postgresql.org/" target='_blank' className='icon'>
                <SiPostgresql className='postgre'/>
            </a>
            <a href="https://www.figma.com/" target='_blank' className='icon'>
                <FaFigma className='figma'/>
            </a>
        </>

    )
}

export default TechIcons;