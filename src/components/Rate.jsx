function Rate({ title, subtitle, icon, items = [] }) {

    return (
        <div className="flex flex-col gap-[var(--spacing-camino-xl)] rounded-lg bg-camino-white p-[var(--spacing-camino-l)] text-camino-green">
            <div className="flex items-center gap-[var(--spacing-camino-m)]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[5px] bg-camino-cream">
                    <img src={icon} alt="" className="h-5 w-5" />
                </div>
                <div className="flex flex-1 flex-col justify-center">
                    <h3 className="font-semibold text-camino-xs">{title}</h3>
                    {subtitle && (
                        <p className="text-camino-xs text-camino-gray">{subtitle}</p>
                    )}
                </div>
            </div>

            {items.length > 0 && (
                <ul className="flex flex-col gap-[var(--spacing-camino-s)]">
                    {items.map(({ label, price }) => (
                        <li key={label} className="flex gap-[var(--spacing-camino-l)] text-camino-xs">
                            <span className="flex-1">{label}</span>
                            {price && <span className="shrink-0">{price}</span>}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Rate;
