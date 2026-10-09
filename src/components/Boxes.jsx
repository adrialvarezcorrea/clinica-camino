import Box from "./Box";
import user from "../assets/icons/user.svg";
import couple from "../assets/icons/couple.svg";
import home from "../assets/icons/home.svg";
import clock from "../assets/icons/clock.svg";
import pc from "../assets/icons/pc.svg";

function Boxes({ id, title, layout = "default", spacingBottom = "default" }) {

    const spacings = {
        default: "pb-[var(--spacing-camino-3xl)]",
        reduced: "pb-0",
    };

    const items = [
        { title: "Consulta individual", icon: user },
        { title: "Terapia de pareja", icon: couple },
        { title: "Consulta a domicilio", icon: home },
        { title: "Consulta fuera de horario", icon: clock },
        { title: "Consulta online", icon: pc },
    ];

    return (
        <section id={id} className={`bg-camino-white pt-[var(--spacing-camino-3xl)] ${spacings[spacingBottom]} text-camino-green`}>
            <div className="grid-camino gap-y-[var(--spacing-camino-xl)]">

                {title && (
                    <h1 className="col-span-4 text-camino-l text-center md:col-start-3 md:col-span-8">
                        {title}
                    </h1>
                )}

                <div className="col-span-4 md:col-span-12 grid grid-cols-1 gap-[var(--spacing-camino-m)] md:grid-cols-3">
                    {items.map((item) => (
                        <Box
                            key={item.title}
                            title={item.title}
                            subtitle={item.subtitle}
                            icon={item.icon}
                            layout={layout}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Boxes;
