import BlogCard from "../components/BlogCard"
import Title from "../components/Title"
import Form from "../components/Form"
import hero from "../assets/hero.jpg"

function Blog() {
  return (
    <div className="flex flex-col">
      <Title
        title="Blog"
        layout="center"
        color="subdued"
      />

      <div className="grid-camino grid-cols-1 gap-x-[var(--spacing-camino-m)] gap-y-[var(--spacing-camino-2xl)] md:grid-cols-3">
        <BlogCard
          src={hero}
          alt="Blog post 1"
          date="15 de marzo de 2023"
          title="Los beneficios de la medicina natural"
          href="/blog/post-de-ejemplo"
        />
        <BlogCard
          src={hero}
          alt="Blog post 2"
          date="20 de marzo de 2023"
          title="La importancia de una dieta equilibrada"
          href="/blog/post-de-ejemplo"
        />
        <BlogCard
          src={hero}
          alt="Blog post 3"
          date="25 de marzo de 2023"
          title="Ejercicios para mejorar la flexibilidad"
          href="/blog/post-de-ejemplo"
        />
        <BlogCard
          src={hero}
          alt="Blog post 1"
          date="15 de marzo de 2023"
          title="Los beneficios de la medicina natural"
          href="/blog/post-de-ejemplo"
        />
        <BlogCard
          src={hero}
          alt="Blog post 2"
          date="20 de marzo de 2023"
          title="La importancia de una dieta equilibrada"
          href="/blog/post-de-ejemplo"
        />
        <BlogCard
          src={hero}
          alt="Blog post 3"
          date="25 de marzo de 2023"
          title="Ejercicios para mejorar la flexibilidad"
          href="/blog/post-de-ejemplo"
        />
      </div>
      
      <Title
        buttonProps={{
          href: "/blog",
          label: "Cargar más",
        }}
        layout="center"
        color="subdued"
      />

      <Form 
        title={<>Cuéntanos <span className="font-accent">tu caso</span></>}
        description="Si tienes alguna duda acerca del servicio que necesitas o quieres hacernos algún comentario o propuesta estaremos encantados de escucharte."
        color="light"
      />
    </div>
  )
}

export default Blog