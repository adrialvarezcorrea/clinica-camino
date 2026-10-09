import './App.css'
import { Routes, Route } from 'react-router-dom'

import { motion } from 'motion/react'

import MainLayout from './layouts/MainLayout'

import Home from './pages/Home'
import QueHacemos from './pages/QueHacemos'
import QuienesSomos from './pages/QuienesSomos'
import PedirCita from './pages/PedirCita'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import PreguntasFrecuentes from './pages/PreguntasFrecuentes'
import Legal from './pages/Legal'


function App() {
  return (
    <Routes>
      <Route element={<MainLayout background="subdued" />}>
        <Route path="/" element={<Home />} />
        <Route path="/que-hacemos" element={<QueHacemos />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pedir-cita" element={<PedirCita />} />
      </Route>

      <Route element={<MainLayout background="light" />}>
        <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
        <Route path="/blog/post-de-ejemplo" element={<BlogPost />} />
        <Route path="/aviso-legal" element={<Legal slug="aviso-legal" />} />
        <Route path="/politica-de-privacidad" element={<Legal slug="politica-de-privacidad" />} />
        <Route path="/politica-de-cookies" element={<Legal slug="politica-de-cookies" />} />
      </Route>
    </Routes>
  )
}

export default App
