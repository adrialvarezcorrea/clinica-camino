import Button from './Button'

function Jumbo({ headline, title, color = "light", buttonProps }) {

    const variants = {
        subdued: {
            section: "bg-camino-cream",
        },
        light: {
            section: "bg-camino-white",
        },
    };

    return (
        <section className={`${variants[color].section} py-[var(--spacing-camino-3xl)] text-camino-green`}>
            <div className="grid-camino">
                <div className="col-span-4 flex flex-col items-center gap-[var(--spacing-camino-l)] text-center md:col-start-2 md:col-span-10">
                    {headline && <p className="text-camino-cta">{headline}</p>}
                    {title && <h1 className="text-camino-l">{title}</h1>}
                    {buttonProps && (
                        <div className="mt-[var(--spacing-camino-s)]">
                            <Button {...buttonProps} />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Jumbo;