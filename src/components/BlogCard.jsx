import { Link } from "react-router-dom";

function BlogCard({ src, alt = "", date, title, href }) {

    const card = (
        <article className="flex flex-col gap-[var(--spacing-camino-m)]">
            {src ? (
                <img
                    className="aspect-video w-full rounded-lg object-cover"
                    src={src}
                    alt={alt}
                />
            ) : (
                <div className="aspect-video w-full rounded-lg bg-camino-green/20" />
            )}

            <div className="flex flex-col gap-[var(--spacing-camino-xs)] pr-12">
                <p className="text-camino-s text-camino-gray">{date}</p>
                <h3 className="text-camino-s text-camino-green">{title}</h3>
            </div>
        </article>
    );

    if (href) {
        return (
            <Link to={href} className="transition hover:opacity-70">
                {card}
            </Link>
        );
    }

    return card;
}

export default BlogCard;
