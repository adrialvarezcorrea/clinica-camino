import Hero from '../components/Hero'
import ImageBar from '../components/ImageBar'
import Form from '../components/Form'
import ImageSimple from '../components/Media'
import Title from '../components/Title'
import hero from '../assets/hero.jpg'

function QuienesSomos() {
  return (
    <>
      <Hero
        title={(<>Más allá del diagnóstico, entender a <span className="font-accent">la persona</span></>)}
        description="Creemos en un manejo integral e individualizado del malestar emocional y las enfermedades mentales, combinando psicoeducación, psicoterapia, estilo de vida y tratamiento farmacológico en caso necesario."
        layout="secondary"
        src={hero}
        alt="Imagen del Hero"
      />

      <Title
        title="Nuestra clínica"
        layout="center"
        description="La Clínica Camino se encuentra en el centro de Madrid. Hemos cuidado especialmente el espacio, creando un entorno tranquilo y cálido en el que poder sentirse a gusto desde el primer momento y expresarse con confianza."
        buttonProps={{ label: "Google Maps", href: "#" }}
        spacingBottom='reduced'
      />

      <ImageSimple
        layout="grid"
        images={[
          { src: hero, alt: "Clínica Camino" },
          { src: hero, alt: "Clínica Camino" },
          { src: hero, alt: "Clínica Camino" },
          { src: hero, alt: "Clínica Camino" },
        ]}
      />

      <Title
        color="subdued"
        layout="center"
        title="Equipo"
        spacingBottom='reduced'
      />

      <ImageBar
        title="Isabel Álvarez"
        subtitle="Psiquiatra y psicoterapeuta"
        color="subdued"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        src={hero}
        alt="Imagen"
        action1={{
          label: "Visitar Doctoralia",
          href: "#"
        }}
        action2={{
          label: "Descargar CV",
          href: "#"
        }}
        spacingBottom="reduced"
      />

      <ImageBar
        title="Isabel Álvarez"
        subtitle="Psiquiatra y psicoterapeuta"
        color="subdued"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        src={hero}
        alt="Imagen"
        action1={{
          label: "Visitar Doctoralia",
          href: "#"
        }}
        action2={{
          label: "Descargar CV",
          href: "#"
        }}
      />

      <Form 
        title={<>Cuéntanos <span className="font-accent">tu caso</span></>}
        description="Si tienes alguna duda acerca del servicio que necesitas o quieres hacernos algún comentario o propuesta estaremos encantados de escucharte."
        color="light"
      />
    </>
  )
}

export default QuienesSomos
