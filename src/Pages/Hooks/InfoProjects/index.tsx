import { useEffect, useState } from 'react';
import './style.modules.scss';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';
import { FaGithub, FaLinkedin, FaFigma, FaRocket } from 'react-icons/fa';

interface InfoProjectsProps {
    closeInfo: () => void;
    projectInfo: any;
}

type Link = {
    name: string;
    link: string;
    index: number;
}

function InfoProjects({ closeInfo, projectInfo }: InfoProjectsProps){

    const { t } = useTranslation();

    const [changeImage, setChangeImage] = useState(1);
    const [link, setLink] = useState<any>()
    const actualLang = i18next.language;

    const sizeImage = Object.keys(projectInfo.allimages).length;
    const imagem = projectInfo.allimages[changeImage];

    useEffect(() => {
        const filteredLinks = Object.entries(projectInfo.links)
            .filter(([name, link]) => link !== "")
            .map(([name, link]) => ({ name, link }));
            setLink(filteredLinks)
        console.log("Links não vazios:", filteredLinks);
      }, [projectInfo]);

    const icon = (name: string) => {
        switch (name) {
            case 'github':
                return <FaGithub size={30} />;
            case 'figma':
                return <FaFigma size={30} />;
            case 'linkedin':
                return <FaLinkedin size={30} />;
            case 'deploy':
                return <FaRocket size={30} />
            default:
                return null;
        }
    }

    function ChangeImage(content: string) {
        if ((changeImage === 1 && content === "last") || (changeImage === projectInfo.allimages.length && content === "next")) {
          return;
        }
    
        if (content === "next") {
            setChangeImage((prevImage) =>
            prevImage === sizeImage ? sizeImage : prevImage + 1
            );
        } else if (content === "last") {
            setChangeImage( changeImage - 1);
        }
    }

    return(
        <>
            <div className='container'>
                <div className='content-most'>
                    <div className='content-image'>
                        <button onClick={() => ChangeImage("last")}>
                            <BiSolidLeftArrow size={40}/>
                        </button>
                        <div>
                            <img src={imagem} alt="" />
                            <h1>{changeImage}/{sizeImage}</h1>
                        </div>
                        <button onClick={() => ChangeImage("next")}>
                            <BiSolidRightArrow size={40}/>
                        </button>
                    </div>
                    <div className='content-info'>
                        <div className='content-text'>
                            <button className='X'  onClick={closeInfo}>
                                <h1>{t("Fechar")}</h1>
                            </button>
                            <div className='title-info'>
                                <h1>{projectInfo.name}</h1>
                            </div>
                            <div className='info'>
                                <p>{projectInfo.info[actualLang]}</p>
                            </div>
                        </div>
                            <div className='techs-info'>
                                {projectInfo.front !== "" && (
                                    <p><strong>Front-end:</strong> {projectInfo.front}</p>
                                )}
                                {projectInfo.back !== "" && (
                                    <p><strong>Back-end:</strong> {projectInfo.back}</p>
                                )}                            
                                {projectInfo.styles !== "" && (
                                    <p><strong>Styles:</strong> {projectInfo.styles}</p>
                                )}
                            </div>
                        {link && (
                        <div className='links'>
                            {link.map(({name, link, index}: Link) => (
                                <a
                                key={index}
                                href={link}
                                target='_blank'
                                className='icones-link'
                                >
                                    {icon(name)}
                                </a>
                            ))}
                        </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default InfoProjects;
