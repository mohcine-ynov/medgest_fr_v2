import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Inscription from "./components/Inscription/Inscription";
import Connexion from "./components/connexion/Connexion";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Doctors from './components/Doctors/Doctors';
import Home from './components/accueil/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Router>
      <div>
        <Routes>
        <Route path="/accueil" element={<Home />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/doctors" element={<Doctors />} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
