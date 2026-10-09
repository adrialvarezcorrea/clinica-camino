import Button from './Button'

function ImageBar({ title, subtitle, description, color = "light", spacingBottom = "default", src, alt, action1, action2 }) {

    const colors = {
        light: "bg-camino-white",
        subdued: "bg-camino-cream",
    };

    const spacings = {
        default: "pb-[var(--spacing-camino-3xl)]",
        reduced: "pb-0",
    };

    return (
        <section className={`${colors[color]} pt-[var(--spacing-camino-3xl)] ${spacings[spacingBottom]} text-camino-green`}>
            <div className="grid-camino items-center gap-y-[var(--spacing-camino-xl)]">

                <div className="col-span-4 md:col-span-6 flex flex-col gap-[var(--spacing-camino-m)] md:pr-12">
                    <div>
                        <h1 className="text-camino-m">{title}</h1>
                        {subtitle && <h2 className="text-camino-s text-camino-gray">{subtitle}</h2>}
                    </div>

                    <p className="text-camino-s">{description}</p>

                    {(action1 || action2) && (
                        <div className="flex gap-[var(--spacing-camino-s)] mt-[var(--spacing-camino-s)]">
                            {action1 && <Button {...action1} />}
                            {action2 && <Button {...action2} />}
                        </div>
                    )}
                </div>

                <img
                    className="col-span-4 md:col-span-6 aspect-square w-full rounded-lg object-cover"
                    src={src}
                    alt={alt}
                />

            </div>
        </section>
    );
}
export default ImageBar;
