import { Link } from "react-router-dom"
import ReactMarkdown from "react-markdown"

const components = {
  h1: ({ children }) => <h1 className="text-camino-l">{children}</h1>,
  h2: ({ children }) => <h2 className="text-camino-m pt-[var(--spacing-camino-l)]">{children}</h2>,
  h3: ({ children }) => <h3 className="text-camino-s">{children}</h3>,
  p: ({ children }) => <p className="text-camino-s text-camino-gray">{children}</p>,
  ul: ({ children }) => <ul className="flex list-disc flex-col gap-[var(--spacing-camino-xs)] pl-5">{children}</ul>,
  ol: ({ children }) => <ol className="flex list-decimal flex-col gap-[var(--spacing-camino-xs)] pl-5">{children}</ol>,
  li: ({ children }) => <li className="text-camino-s text-camino-gray">{children}</li>,
  strong: ({ children }) => <strong className="text-camino-green">{children}</strong>,


  img: ({ src, alt, title }) => (
    <figure className="flex flex-col gap-[var(--spacing-camino-s)]">
      <img src={src} alt={alt} loading="lazy" className="w-full rounded-lg" />
      {title && <figcaption className="text-camino-xs text-camino-gray">{title}</figcaption>}
    </figure>
  ),

  em: ({ children }) => <em className="font-accent">{children}</em>,

  blockquote: ({ children }) => (
    <blockquote className="rounded-lg bg-camino-cream p-[var(--spacing-camino-m)] [&>p]:text-camino-gray">
      {children}
    </blockquote>
  ),

  a: ({ href = "", children }) =>
    href.startsWith("/") ? (
      <Link to={href} className="underline transition hover:opacity-70">{children}</Link>
    ) : (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="underline transition hover:opacity-70"
      >
        {children}
      </a>
    ),
}

function Markdown({ children }) {
  return <ReactMarkdown components={components}>{children}</ReactMarkdown>
}

export default Markdown
