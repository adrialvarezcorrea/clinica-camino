function Box({ title, subtitle, icon, layout = "default" }) {

    const layouts = {
        default: "flex items-center gap-[var(--spacing-camino-m)] md:flex-col md:items-start md:gap-[var(--spacing-camino-xl)]",
        row: "flex items-center gap-[var(--spacing-camino-m)]",
        column: "flex flex-col items-start gap-[var(--spacing-camino-xl)]",
    };

    return (
        <div className={`${layouts[layout]} rounded-lg bg-camino-cream p-4 text-camino-green`}>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-camino-white">
                <img src={icon} alt="" className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
                <h3 className="font-semibold text-camino-xs">{title}</h3>
                {subtitle && (
                    <p className="text-camino-xs text-camino-gray">{subtitle}</p>
                )}
            </div>
        </div>
    );
}

export default Box;
