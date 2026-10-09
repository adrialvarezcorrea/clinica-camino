import Faq from '../components/Faq'
import { faq } from '../content/data-faq'
import Form from '../components/Form'

function PreguntasFrecuentes() {
  return (
    <>
    <Faq
      title="Preguntas frecuentes"
      items={faq}
    />
    <Form 
      color="subdued"
      title={<>Cuéntanos <span className="font-accent">tu caso</span></>}
      description="Si tienes alguna duda acerca del servicio que necesitas o quieres hacernos algún comentario o propuesta estaremos encantados de escucharte."
    />
    </>
  )
}

export default PreguntasFrecuentes
