import { Link } from "react-router-dom"
import Form from "../components/Form"
import cover from "../assets/hero.jpg"
import backIcon from "../assets/icons/back.svg"

function BlogPost() {

  const heading = "text-camino-l"
  const subheading = "text-camino-m pt-[var(--spacing-camino-l)]"
  const paragraph = "text-camino-s text-camino-green"
  const caption = "text-camino-s text-camino-gray"

  return (
    <>
      <article className="bg-camino-white py-[var(--spacing-camino-3xl)] text-camino-green">
        <div className="grid-camino">
          <div className="col-span-4 flex flex-col gap-[var(--spacing-camino-xl)] md:col-start-3 md:col-span-8">

            <Link to="/blog" className={`flex items-center gap-[var(--spacing-camino-xs)] ${caption} transition hover:opacity-70`}>
              <img src={backIcon} alt="" className="h-4 w-4 shrink-0" />
                Volver
            </Link>

            <div className="flex flex-col gap-[var(--spacing-camino-s)]">
              <h1 className={heading}>Los beneficios de la medicina natural</h1>
              <p className={caption}>15 de marzo de 2023</p>
            </div>

            <img
              src={cover}
              alt=""
              className="aspect-video w-full rounded-lg object-cover"
            />

            <p className={paragraph}>
              Texto de ejemplo para el primer párrafo de la entrada. Este post
              existe para ver cómo quedan los estilos; el contenido real vendrá
              de WordPress.
            </p>

            <h2 className={subheading}>Un subtítulo de sección</h2>

            <p className={paragraph}>
              Aquí puedes escribir en <strong className="text-camino-green">negrita</strong>,
              en <em className="font-accent">cursiva</em>, o enlazar a otra página del
              sitio como{" "}
              <Link to="/pedir-cita" className="underline transition hover:opacity-70">
                Pedir cita
              </Link>.
            </p>

            <ul className="flex list-disc flex-col gap-[var(--spacing-camino-xs)] pl-5">
              <li className={paragraph}>Un punto de una lista</li>
              <li className={paragraph}>Otro punto</li>
              <li className={paragraph}>Un tercero</li>
            </ul>

            <h2 className={subheading}>Otra sección</h2>

            <p className={paragraph}>
              Los párrafos se separan con una línea en blanco. El espaciado
              entre bloques lo pone el <code>gap</code> del contenedor, así que
              no hace falta margen en cada elemento.
            </p>

            <blockquote className="rounded-lg bg-camino-cream p-[var(--spacing-camino-m)]">
              <p className={paragraph}>Una cita destacada, si te hace falta.</p>
            </blockquote>

            <figure className="flex flex-col gap-[var(--spacing-camino-s)]">
              <img src={cover} alt="" loading="lazy" className="w-full rounded-lg" />
              <figcaption className={caption}>
                Una imagen dentro del cuerpo, con su pie de foto.
              </figcaption>
            </figure>

          </div>
        </div>
      </article>

      <Form
        title={<>Cuéntanos <span className="font-accent">tu caso</span></>}
        description="Si tienes alguna duda acerca del servicio que necesitas o quieres hacernos algún comentario o propuesta estaremos encantados de escucharte."
        color="subdued"
      />
    </>
  )
}

export default BlogPost
