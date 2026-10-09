import Form from '../components/Form'
import Rates from '../components/Rates'

function PedirCita() {
  return (
    <>
      <Rates
        title="Tarifas y modalidades"
        buttonProps={{
          label: "WhatsApp",
          href: "#",
          target: "_blank",
          rel: "noopener noreferrer",
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

export default PedirCita
