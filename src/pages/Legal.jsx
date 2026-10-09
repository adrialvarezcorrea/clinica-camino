import { Link } from "react-router-dom"
import Markdown from "../components/Markdown"

// Mismo mecanismo que el blog: Vite resuelve el patrón en build y deja cada
// .md como string, indexado aquí por su nombre de fichero.
const files = import.meta.glob("../content/legal/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
})

const docs = Object.fromEntries(
  Object.entries(files).map(([path, content]) => [
    path.split("/").pop().replace(/\.md$/, ""),
    content,
  ])
)

function Legal({ slug }) {
  const content = docs[slug]

  return (
    <section className="bg-camino-white py-[var(--spacing-camino-3xl)] text-camino-green">
      <div className="grid-camino">
        <div className="col-span-4 flex flex-col gap-[var(--spacing-camino-m)] md:col-start-3 md:col-span-8">
          {content ? (
            <Markdown>{content}</Markdown>
          ) : (
            <>
              <h1 className="text-camino-l">Página no encontrada</h1>
              <p className="text-camino-s text-camino-gray">
                El documento que buscas no existe o ha cambiado de dirección.
              </p>
              <Link to="/" className="text-camino-cta underline transition hover:opacity-70">
                Volver al inicio
              </Link>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default Legal
