import Box from './Box'

function FeaturedList({ title, description, items = [], color = "light", spacingBottom = "default" }) {

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
                    <h1 className="text-camino-m">{title}</h1>
                    <p className="text-camino-s">{description}</p>
                </div>

                <div className="col-span-4 md:col-span-6 flex flex-col gap-[var(--spacing-camino-m)]">
                    {items.map((item) => (
                        <Box
                            key={item.title}
                            layout="row"
                            title={item.title}
                            subtitle={item.subtitle}
                            icon={item.icon}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}

export default FeaturedList;
