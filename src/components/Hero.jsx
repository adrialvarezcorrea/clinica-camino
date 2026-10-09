import Button from './Button'

function Hero({ layout = "primary", title, description, src, alt, buttonProps }) {

    const variants = {
        primary: {
            section: "gap-y-[var(--spacing-camino-xl)]",
            content: "col-span-4 items-center text-center md:col-start-3 md:col-span-8",
            image: "col-span-4 aspect-square md:col-span-12 md:aspect-video",
        },
        secondary: {
            section: "items-center gap-y-[var(--spacing-camino-xl)]",
            content: "col-span-4 items-start md:col-span-6 md:pr-12",
            image: "col-span-4 aspect-square md:col-span-6",
        },
    };

    return (
        <section className="bg-camino-cream text-camino-green py-[var(--spacing-camino-3xl)]">
            <div className={`grid-camino ${variants[layout].section}`}>
                <div className={`flex flex-col gap-[var(--spacing-camino-m)] ${variants[layout].content}`}>
                    {title && <h1 className="text-camino-l">{title}</h1>}
                    {description && (
                        <p className="max-w-[440px] text-camino-s">
                            {description}
                        </p>
                    )}
                    {buttonProps && (
                        <div className="mt-[var(--spacing-camino-s)]">
                            <Button {...buttonProps} />
                        </div>
                    )}
                </div>

                <img
                    src={src}
                    alt={alt}
                    className={`w-full rounded-lg object-cover ${variants[layout].image}`}
                />
            </div>
        </section>
    );
}

export default Hero;