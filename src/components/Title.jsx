import Button from './Button'

function Title({ id, color = "light", layout = "left", spacingBottom = "default", title, description, buttonProps }) {

    const colors = {
        light: "bg-camino-white",
        subdued: "bg-camino-cream",
    };

    // "reduced" para cuando la sección de abajo es continuación de esta.
    const spacings = {
        default: "pb-[var(--spacing-camino-3xl)]",
        reduced: "pb-0",
    };

    const layouts = {
        left:    "md:col-start-1 md:col-span-8 md:items-start md:text-left",
        columns: "md:col-span-6 md:items-start text-left",
        center:  "md:col-start-3 md:col-span-8 md:items-center md:text-center",
    };

    return (
        <section id={id} className={`${colors[color]} pt-[var(--spacing-camino-3xl)] ${spacings[spacingBottom]} text-camino-green`}>
            <div className="grid-camino gap-y-[var(--spacing-camino-m)]">

                {title && (
                    <h1 className={`col-span-4 text-camino-l text-center ${layouts[layout]}`}>
                        {title}
                    </h1>
                )}

                {(description || buttonProps) && (
                    <div className={`col-span-4 flex flex-col items-center gap-[var(--spacing-camino-m)] text-center ${layouts[layout]}`}>
                        {description && <p className="text-camino-s">{description}</p>}
                        {buttonProps && (
                            <div className="mt-[var(--spacing-camino-s)]">
                                <Button {...buttonProps} />
                            </div>
                        )}
                    </div>
                )}

            </div>
        </section>
    );
}

export default Title;
