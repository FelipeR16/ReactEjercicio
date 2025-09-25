import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Detalle from './pages/Detalle';
import Favoritos from './pages/Favoritos';
import Home from './pages/Home';
import Informativa from './pages/Informativa';
import Mapa from './pages/Mapa';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <>
        <Router>
            <nav className='c-menu'>
                <Link to="/Home">Home</Link>
                <Link to="/Informativa">Informativa</Link>
                <Link to="/Mapa">Mapa</Link>
                <Link to="/Favoritos">Favoritos</Link>
            </nav>
           <Routes>
                <Route path="/Favoritos" element={<Favoritos/>}/>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/Informativa" element={<Informativa/>}/>
                <Route path="/Mapa" element={<Mapa/>}/>
            </Routes>
        </Router>
    </>
  )
}

export default App