import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './App.scss';

import Home from './Pages/sectionMe/Home';
import SectionProjects from './Pages/sectionProjects';
import Skills from './Pages/sectionSkills';

import NavigationButton from './Components/Button';

function App() {

  useEffect(() => {
    document.title = 'Felipe Castro - Portifolio';
  }, []);

  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Montserrat+Alternates:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div className="App">
        <div className='padding'>
          <Home/>
        </div>
        <Skills/>
        <div className='padding'>
          <SectionProjects/>
        </div>
        <div className='navigation-button'>
          <NavigationButton/>
        </div>
      </div>
    </>
  );
}

export default App;
