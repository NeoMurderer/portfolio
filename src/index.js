import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { Overlay } from './scene/Overlay';

import reportWebVitals from './reportWebVitals';
import { Globals } from "@react-spring/shared";
import { Canvas } from '@react-three/fiber';


createRoot(document.getElementById('root')).render(
  <>
    <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* ON */}
      </header>
   <Canvas shadows>
      <App />
    </Canvas>
    <Overlay/>
  </>
)
reportWebVitals()