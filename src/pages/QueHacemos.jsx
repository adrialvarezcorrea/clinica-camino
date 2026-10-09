import Hero from '../components/Hero'
import Boxes from '../components/Boxes'
import ImageBar from '../components/ImageBar'
import Jumbo from '../components/Jumbo'
import Form from '../components/Form'
import ImageSimple from '../components/Media'
import Title from '../components/Title'
import Faq from '../components/Faq'
import FeaturedList from '../components/FeaturedList'
import { areas } from '../content/data-faq'
import hero from '../assets/hero.jpg'
import edit from '../assets/icons/edit.svg'
import target from '../assets/icons/target.svg'
import talk from '../assets/icons/talk.svg'
import happy from '../assets/icons/happy.svg'

const fases = [
  { title: "Evaluación psicológica completa", subtitle: "Queremos entenderte", icon: edit },
  { title: "Estudio del caso en equipo", subtitle: "Queremos dar en el clavo", icon: target },
  { title: "Entrevista de devolución y objetivos", subtitle: "Queremos construir contigo", icon: talk },
  { title: "Intervención psicoterapéutica", subtitle: "Queremos que estés bien", icon: happy },
]

function QueHacemos() {
  return (
    <>
      <Hero
        title={(<>Somos un centro especializado en <span className="font-accent">Salud Mental</span></>)}
        description="Creemos en un manejo integral e individualizado del malestar emocional y las enfermedades mentales, combinando psicoeducación, psicoterapia, estilo de vida y tratamiento farmacológico en caso necesario."
        layout="secondary"
        src={hero}
        alt="Imagen del Hero"
      />

      <Boxes
        title={<>Modalidades de <span className="font-accent">tratamiento</span></>}
        spacingBottom="reduced"
      />

      <ImageBar
        title="Apoyo continuo"
        description="Sabemos que el proceso terapéutico no ocurre solo durante las consultas. Por eso, ofrecemos un canal de contacto para situaciones específicas que puedan beneficiarse de una breve orientación entre sesiones."
        src={hero}
        alt="Imagen"
      />

      <Title
        color="subdued"
        layout="center"
        title="Metodología"
        spacingBottom='reduced'
      />

      <Title
        color="subdued"
        layout="columns"
        title="Primera consulta"
        description={<>La primera consulta durará una hora. En ella hablaremos sobre ti, lo que necesitas, tu recorrido antes de llegar a nuestra clínica...<br /><br /> Realizaremos una valoración general completa con la que obtendremos una impresión diagnóstica que compartiremos contigo.<br /><br />Con todo ello podremos esbozar un plan terapéutico integral e individualizado. La intensidad y duración del proceso la determinaremos juntos, sin perder de vista la flexibilidad que necesites.</>}
        spacingBottom="reduced"
      />

      <ImageSimple
        color="subdued"
        src={hero}
        alt="Primera consulta"
      />

      <Title
        color="light"
        layout="columns"
        title="Consultas sucesivas"
        description="Las consultas sucesivas se ajustarán a tus necesidades:"
        spacingBottom="reduced"
      />

      <ImageBar
        title="Camino A"
        description="Sesiones de seguimiento con la periodicidad que necesites (semanal, quincenal o mensual) en las que valoraremos la evolución, revisaremos el tratamiento farmacológico y haremos intervenciones de psicoeducación y psicoterapia de apoyo. "
        src={hero}
        alt="Imagen"
        spacingBottom="reduced"
      />

      <FeaturedList
        title="Camino B"
        description={<>Proceso psicoterapéutico reglado (metodología estructurada), intensivo (sesiones semanales), focalizado (dirigido a unos objetivos concretos) y con una duración limitada en el tiempo; evitando así terapias muy prolongadas y sin rumbo. Podremos combinarlo, en caso de que lo necesites, con tratamiento farmacológico.<br></br><br></br>Este proceso incluye las siguientes fases:</>}
        items={fases}
      />

      <Jumbo
        buttonProps={{
          label: "Pedir cita",
          href: "./pedir-cita",
        }}
        headline="Terapia con dirección"
        title={<>Con trabajo duro, tanto por tu parte como por la nuestra, obtendremos <span className="font-accent">resultados</span> evitando terapias muy prolongadas y sin rumbo.</>}
        color="subdued"
      />

      <Faq
        title="Áreas de atención"
        items={areas}
      />

      <Form 
        title={<>Cuéntanos <span className="font-accent">tu caso</span></>}
        description="Si tienes alguna duda acerca del servicio que necesitas o quieres hacernos algún comentario o propuesta estaremos encantados de escucharte."
      />
    </>
    
  )
}

export default QueHacemos
