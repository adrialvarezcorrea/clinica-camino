import Button from './Button'

function Footer() {
  const link = "opacity-80 hover:opacity-100 transition duration-100";

  return (
    <footer className="bg-camino-green text-camino-cream py-[var(--spacing-camino-3xl)]">
      <div className="grid-camino gap-y-[var(--spacing-camino-2xl)] text-camino-xs">

        <div className="col-span-4 md:col-span-12 border-b border-camino-gray pb-[var(--spacing-camino-l)]">
          <p className="text-camino-l text-camino-white">ClínicaCa<span className="font-accent italic">m</span>ino</p>
        </div>

        <div className="col-span-4 md:col-span-12 grid grid-cols-subgrid gap-y-[var(--spacing-camino-xl)]">
          <ul className="col-span-4 md:col-span-6 flex flex-col gap-[var(--spacing-camino-xs)]">
            <li className="font-semibold mb-[var(--spacing-camino-xs)]">Horario</li>
            <li>Lunes 15:00 - 20:00</li>
            <li>Martes 15:00 - 20:00</li>
            <li>Jueves 11:00 - 14:00 y  16:00 - 20:00</li>
          </ul>

          <ul className="col-span-4 md:col-span-6 flex flex-col gap-[var(--spacing-camino-xs)]">
            <li className="font-semibold mb-[var(--spacing-camino-xs)]">Clínica Camino</li>
            <li><a className={link} href="/que-hacemos">Qué hacemos</a></li>
            <li><a className={link} href="/quienes-somos">Quiénes somos</a></li>
            <li><a className={link} href="/preguntas-frecuentes">Preguntas frecuentes</a></li>
            <li><a className={link} href="/blog">Blog</a></li>
          </ul>

          <ul className="col-span-4 md:col-span-6 flex flex-col gap-[var(--spacing-camino-xs)]">
            <li className="font-semibold mb-[var(--spacing-camino-xs)]">Dirección</li>
            <li><a className={link} href="https://share.google/3LdZ9JNG2TaY6mzAh" target="_blank" rel="noopener noreferrer">Calle Montesa, 25<br></br>28006 Madrid</a></li>
          </ul>

          <ul className="col-span-4 md:col-span-6 flex flex-col gap-[var(--spacing-camino-xs)]">
            <li className="font-semibold mb-[var(--spacing-camino-xs)]">Legal</li>
            <li><a className={link} href="/aviso-legal">Aviso legal</a></li>
            <li><a className={link} href="/politica-de-privacidad">Política de privacidad</a></li>
            <li><a className={link} href="/politica-de-cookies">Política de Cookies</a></li>
          </ul>
        </div>

        <ul className="col-span-4 md:col-span-12 flex gap-[var(--spacing-camino-s)]">
          <li><Button color="dark" href="mailto:info@clinica-camino.com" label="E-mail"></Button></li>
          <li><Button color="dark" href="#" target="_blank" rel="noopener noreferrer" label="Instagram"></Button></li>
          <li><Button color="dark" href="#" target="_blank" rel="noopener noreferrer" label="WhatsApp"></Button></li>
        </ul>

      </div>
    </footer>
  )
}

export default Footer
