function Media({ layout = "single", color = "light", src, alt, images = [] }) {

    const colors = {
        light: "bg-camino-white",
        subdued: "bg-camino-cream",
    };

    const gridItems = [
        "col-span-2 md:col-span-6 md:aspect-[4/3] aspect-square",
        "col-span-2 md:col-span-6 md:aspect-[4/3] aspect-square",
        "col-span-4 md:col-span-9 aspect-[16/9]",
        "col-span-2 md:col-span-3 aspect-square",
    ];

    return (
        <section className={`${colors[color]} pt-[var(--spacing-camino-2xl)] pb-[var(--spacing-camino-3xl)]`}>
            <div className="grid-camino gap-y-[var(--spacing-camino-m)]">
                {layout === "grid" ? (
                    gridItems.map((cls, i) => (
                        <img
                            key={i}
                            className={`${cls} w-full rounded-lg object-cover`}
                            src={images[i]?.src}
                            alt={images[i]?.alt}
                        />
                    ))
                ) : (
                    <img
                        className="col-span-4 md:col-span-12 aspect-video w-full rounded-lg object-cover"
                        src={src}
                        alt={alt}
                    />
                )}
            </div>
        </section>
    );
}

export default Media;
