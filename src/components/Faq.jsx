import { useState } from "react";
import moreIcon from "../assets/icons/down.svg";

function Accordion({ id, title, items = [] }) {

    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if (selected === i) {
            setSelected(null);
        } else {
            setSelected(i);
        }
    }

    return (
        <section id={id} className="bg-camino-white py-[var(--spacing-camino-3xl)] text-camino-green">

            <div className="grid-camino gap-y-[var(--spacing-camino-xl)] cursor-pointer">

                <h1 className="col-span-4 text-camino-l text-center md:col-start-3 md:col-span-8">{title}</h1>
                
                <div className="col-span-4 md:col-span-10 md:col-start-2 flex flex-col gap-[var(--spacing-camino-m)]">
                    {items.map((item, i) => (
                        <div key={item.question} className="flex flex-col gap-[var(--spacing-camino-l)] rounded-lg bg-camino-cream p-[var(--spacing-camino-l)]" onClick={() => toggle(i)}>
                            <div className="flex items-center justify-between gap-[var(--spacing-camino-l)]">
                                <h3 className="font-semibold text-camino-s">{item.question}</h3>
                                <img
                                    src={moreIcon}
                                    alt=""
                                    className={`h-5 w-5 shrink-0 transition-transform duration-200 ${selected === i ? "rotate-180" : ""}`}
                                />
                            </div>
                            <p className={`${selected === i ? "block" : "hidden"} text-camino-s text-camino-gray whitespace-pre-line`}>{item.answer}</p>
                        </div>
                    ))}
                </div>

            </div>

        </section>
    );
}

export default Accordion;
