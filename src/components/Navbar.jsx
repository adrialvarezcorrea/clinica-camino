import { Link } from 'react-router-dom'
import Button from './Button'
import { useState } from 'react'

function Navbar() {
  const linkClass = "text-camino-cta text-camino-green transition hover:opacity-70"
  const mobileLinkClass = "text-camino-green text-camino-m transition hover:opacity-70"

  const [open, setOpen] = useState(false);

  return (
    <header className="fixed z-50 inset-x-0 mx-auto w-full max-w-[var(--container-camino)] px-[var(--spacing-camino-l)] pt-[var(--spacing-camino-m)] md:px-0 md:pt-[var(--spacing-camino-l)]">
      
      <nav className="bg-camino-white rounded-lg flex flex-col gap-[var(--spacing-camino-l)] p-[var(--spacing-camino-m)]">
        <div className="flex items-center justify-between">
          <Link to="/" onClick={() => setOpen(false)} className="text-camino-m text-camino-green">ClínicaCa<span className="font-accent italic">m</span>ino</Link>
        
          {/* Desktop */}
          <div className="hidden items-center gap-[var(--spacing-camino-l)] md:flex">
            <Link className={linkClass} to="/que-hacemos">Qué hacemos</Link>
            <Link className={linkClass} to="/quienes-somos">Quiénes somos</Link>
            <Link className={linkClass} to="/preguntas-frecuentes">Preguntas frecuentes</Link>
            <Button label="Pedir cita" href="/pedir-cita" />
          </div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="flex h-8 w-8 cursor-pointer flex-col items-center justify-center gap-[7px] md:hidden"
          >
            <span
              className={`h-0.5 w-5 rounded-full bg-camino-green transition-transform duration-200 ${
                open ? "translate-y-[4.5px]" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-camino-green transition-transform duration-200 ${
                open ? "-translate-y-[4.5px]" : ""
              }`}
            />
          </button>
        </div>

      {/* Mobile menu */}
      {open && (
        <div className="flex flex-col gap-[var(--spacing-camino-xl)] md:hidden">
          <div className="flex flex-col gap-[var(--spacing-camino-s)]">
             {/* <p className="text-camino-cta text-camino-gray mb-[var(--spacing-camino-xs)]">Menú</p> */} 
            <Link onClick={() => setOpen(false)} className={mobileLinkClass} to="/que-hacemos">Qué hacemos</Link>
            <Link onClick={() => setOpen(false)} className={mobileLinkClass} to="/quienes-somos">Quiénes somos</Link>
            <Link onClick={() => setOpen(false)} className={mobileLinkClass} to="/preguntas-frecuentes">Preguntas frecuentes</Link>
            <Link onClick={() => setOpen(false)} className={mobileLinkClass} to="/blog">Blog</Link>
          </div>
            <Button label="Pedir cita" href="/pedir-cita" />
        </div>
      )}

      </nav>
    </header>
  )
}

export default Navbar
