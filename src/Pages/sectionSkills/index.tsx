import React, { useRef, useState } from 'react';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';
import TechIcons from "../../Components/Techs";
import './style.modules.scss';

function Skills() {
  const iconsTechRef = useRef<HTMLDivElement>(null);
  const [startX, setStartX] = useState(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.button !== 0) return; // Verifica se é o botão esquerdo do mouse
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (startX === 0) return;

    const delta = startX - e.clientX; 

    if (iconsTechRef.current) {
      iconsTechRef.current.scrollLeft += delta;
    }

    setStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setStartX(0);
  };

  const scrollLeft = () => {
    if (iconsTechRef.current) {
      iconsTechRef.current.scrollTo({
        left: iconsTechRef.current.scrollLeft - 100,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (iconsTechRef.current) {
      iconsTechRef.current.scrollTo({
        left: iconsTechRef.current.scrollLeft + 100,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="skills">
      <h1>Skills</h1>
      <div
        className='content-skills'
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <button onClick={scrollLeft}>
            <BiSolidLeftArrow size={40}/>
        </button>
        <div className='icons-tech' ref={iconsTechRef}>
          <TechIcons />
        </div>
        <button onClick={scrollRight}>
            <BiSolidRightArrow size={40}/>
        </button>
      </div>
    </div>
  );
}

export default Skills;
