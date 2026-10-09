import Rate from "./Rate";
import Button from "./Button";
import user from "../assets/icons/user.svg";
import couple from "../assets/icons/couple.svg";
import home from "../assets/icons/home.svg";
import clock from "../assets/icons/clock.svg";

function Rates({ id, title, description, buttonProps, spacingBottom = "default" }) {

    const items = [
        {
            title: "Consulta individual",
            subtitle: "Presencial o videollamada",
            icon: user,
            rates: [
                { label: "Primera consulta", price: "130€" },
                { label: "Consultas sucesivas", price: "110€" },
                { label: "Bono 5 sesiones", price: "490€" },
            ],
        },
        {
            title: "Terapia de pareja",
            icon: couple,
            rates: [
                { label: "Primera consulta", price: "160€" },
                { label: "Consultas sucesivas", price: "140€" },
            ],
        },
        {
            title: "Consultas a domicilio",
            icon: home,
            rates: [
                { label: "Precio orientativo, podría variar según distancia.", price: "275 €" },
            ],
        },
        {
            title: "Fuera de horario",
            icon: clock,
            rates: [
                { label: "Según disponibilidad. Consultar horarios y tarifas." },
            ],
        },
    ];

    return (
        <section id={id} className={`bg-camino-cream py-[var(--spacing-camino-3xl)] text-camino-green`}>
            <div className="grid-camino gap-y-[var(--spacing-camino-xl)]">

                {(title || description || buttonProps) && (
                    <div className="col-span-4 flex flex-col items-center gap-[var(--spacing-camino-m)] text-center md:col-span-8 md:col-start-3">
                        {title && <h1 className="text-camino-l">{title}</h1>}
                        {description && <p className="text-camino-s">{description}</p>}
                        {buttonProps && (
                            <div className="mt-[var(--spacing-camino-s)]">
                                <Button {...buttonProps} />
                            </div>
                        )}
                    </div>
                )}

                <div className="col-span-4 flex flex-col gap-[var(--spacing-camino-m)] md:col-span-8 md:col-start-3">
                    {items.map((item) => (
                        <Rate
                            key={item.title}
                            title={item.title}
                            subtitle={item.subtitle}
                            icon={item.icon}
                            items={item.rates}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Rates;
