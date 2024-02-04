import React, { FormEvent, useState, useEffect } from 'react';
import './style.modules.scss';
import AOS from 'aos';
import { useTranslation } from 'react-i18next';

import Api from '../../../Api/APi.Projects.json';

import InfoProjects from '../InfoProjects';

export interface Project {
    name: string;
    techs: string[];
    stack: string | string[];
    banner: string;
    allimages: Record<string, string>;
    info: Record<string, string>;
}

function Projects(){    
    const techs = ["JavaScript", "TypeScript", "React Native", "React JS", "HTML", "All"];
    const stack = ["Mobile", "Web", "Full-Stack"];

    const {t} = useTranslation();

    const [stackSelected, setStackSelected] = useState("Full-Stack");
    const [techSelected, setTechSelected] = useState("All");
    const [filteredProjects, setFilteredProjects] = useState<Record<string, Project>>({});

    const [detailProject, setDetailProject] = useState(false);
    const [selectedProjectInfo, setSelectedProjectInfo] = useState<Project | null>(null);

    const api = Object.values(Api.Projects);

    useEffect(() => {   
        setFilteredProjects(Api.Projects);
        AOS.init();
        console.log(Api.Projects)
    }, []);

    useEffect(() => {
        document.body.classList.toggle('no-scroll', detailProject);
        return () => {
          document.body.classList.remove('no-scroll');
        }
    }, [detailProject])
    
    function handleStack(value: string): void{
        setStackSelected(value)
        
        const response = api.filter((project: Project) => 
            project.stack.includes(value)
        )
        const filteredProjects = Object.fromEntries(
            response.map((project) => [project.name, project])
        ) as Record<string, Project>;
        setFilteredProjects(filteredProjects)

        while (Object.keys(filteredProjects).length < 4){
            const filterProject: Project = {
                name: 'Unknown',
                techs: [],
                stack: 'Undefined Stack',
                banner: 'url',
                allimages: {},
                info: {}
            }

            const filterStack = `UndefinedProject_${Math.random()}`

            filteredProjects[filterStack] = filterProject
        }

        setFilteredProjects(filteredProjects)
    }
    
    function handleTech(value: string): void{
        setTechSelected(value)
        if(value === "All"){
            setFilteredProjects(Api.Projects);
            console.log(filteredProjects)
            return
        }else{
            const response = api.filter((project: Project) => 
                project.techs.includes(value)
            )
            const filteredProjects = Object.fromEntries(
                response.map((project) => [project.name, project])
            ) as Record<string, Project>;
    
            setFilteredProjects(filteredProjects);     
            
            while (Object.keys(filteredProjects).length < 4) {
                const fillerProject: Project = {
                    name: 'Unknown',
                    techs: [],
                    stack: 'Undefined Stack',
                    banner: 'url',
                    allimages: {},
                    info: {}
                };
    
                const fillerKey = `UndefinedProject_${Math.random()}`;
    
                filteredProjects[fillerKey] = fillerProject;
            }
    
            setFilteredProjects(filteredProjects);
        }
    }

    function calculateDelayTech(index: number): number{
        const delay = 200;
        return index * delay
    }

    function calculateDelayStack(index: number): number{
        const delay = 450;
        return index * delay
    }

    function handleClick(index: string){
        const response = filteredProjects[index]
        setSelectedProjectInfo(response)
        setDetailProject(true)
    }

    return(
        <>
            <div className='container-projects'>
                <div className='content-box'>
                    <div className='technology'> 
                        {techs.map((value, index) => (
                            <button 
                            data-aos="fade-right" 
                            data-aos-delay={calculateDelayTech(index)}
                            key={index} 
                            onClick={() => handleTech(value)}
                            className={techSelected === value ? 'selected' : ''}
                            >
                                {value}
                            </button>
                        ))}
                    </div>
                    <div className='content'>
                            <div className='stack'>
                            {stack.map((value, index) => (
                                    <button 
                                    key={index}
                                    data-aos="fade-down" 
                                    data-aos-delay={calculateDelayStack(index)}
                                    onClick={() => handleStack(value)}
                                    className={stackSelected === value ? 'selected' : ''}
                                    >
                                        {value}
                                    </button>
                                ))}
                            </div>
                        <div className='content-projects'>
                            <div className='projects'>
                                    {Object.keys(filteredProjects).map((index) => (
                                        <button 
                                        className='card' 
                                        key={index}
                                        onClick={ () => handleClick(index)}
                                        >
                                            <div className='banner'>
                                                <img src={filteredProjects[index].banner} alt="Banner" />
                                                <div className='more'>
                                                    <span>{t("Ver mais")}</span>
                                                </div>
                                            </div>
                                            <div className='title'>
                                                <h1>{filteredProjects[index].name}</h1>
                                            </div>
                                        </button>
                                    ))}
                            </div>
                        </div> 
                    </div>
                    <div className='technology'>

                    </div>
                </div>

            </div>
            {detailProject && (
                <div className='most'>
                    <InfoProjects
                    projectInfo={selectedProjectInfo}
                    closeInfo={() => setDetailProject(false)}
                    />
                </div>
            )}
        </>
    )
}

export default Projects;