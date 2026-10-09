import Hero from '../components/Hero'
import Jumbo from '../components/Jumbo'
import Form from '../components/Form'
import hero from '../assets/hero.jpg'

function Home() {
  return (
    <>
      <Hero
        title={(<>Queremos ayudarte en{" "} tu ca<span className="font-accent">m</span>ino</>)}
        description="Somos un centro especializado en Salud Mental, con un abordaje integral que combina psiquiatría y psicoterapia."
        layout="primary"
        src={hero}
        alt="Imagen del Hero"
      />

      <Jumbo
        buttonProps={{
          label: "Saber más",
          href: "./que-hacemos",
        }}
        headline="Enfoque"
        title={<>Creemos en un manejo <span className="font-accent">integral e individualizado</span> de la salud mental, combinando psicoeducación, psicoterapia, estilo de vida y tratamiento farmacológico en caso necesario.</>}
        color="light"
      />
  
      <Form 
        title={<>Cuéntanos <span className="font-accent">tu caso</span></>}
        description="Si tienes alguna duda acerca del servicio que necesitas o quieres hacernos algún comentario o propuesta estaremos encantados de escucharte."
      />
      
    </>
  )
}

export default Home
