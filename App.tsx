import React, { useEffect } from 'react';
import './App.scss';

import Home from './Pages/Home/Home';

function App() {

  useEffect(() => {
    document.title = 'Felipe Castro - Portifolio';
  }, []);

  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
