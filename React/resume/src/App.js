import React, { useEffect, useState } from 'react';
// import './App.css';
import About from './components/About';
import Navigation from './components/Navigation';

function App() {
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    setTimeout(() => setVisible(false), 2000)
  }, [])

  return (
    <>
      {/* //? loading Effect */}
      <div className={`loader-wrapper ${visible ? 'fadeIn' : 'fadeOut'}`}>
        <span className="loader"><span className="loader-inner"></span></span>
      </div>

      {/* //? Navigation*/}
      <Navigation />

      {/* //? Page Content*/}
      <div class="container-fluid p-0">
        <About />
      </div>

    </>
  );
}

export default App;
