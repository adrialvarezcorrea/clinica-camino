import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import whatsappLogo from '../assets/icons/whatsapp-logo.svg'

function MainLayout({ background = "subdued" }) {

  const backgrounds = {
    light: "bg-camino-white",
    subdued: "bg-camino-cream",
  };

  return (
    <div className={backgrounds[background]}>
      <Navbar />
      <main className="pt-[80.5px] md:pt-[96px]">
        <Outlet />
        <div className="sticky bottom-0 z-40 flex h-0 items-end justify-end pr-4">
          <Button
            label="WhatsApp"
            icon={whatsappLogo}
            variant="solid"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-4"
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}
export default MainLayout
