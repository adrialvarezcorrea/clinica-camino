import Button from './Button'

function Form({ id, title, description, color = "subdued" }) {

    const variants = {
        light: {
            section: "bg-camino-white",
            field: "bg-camino-cream",
        },
        subdued: {
            section: "bg-camino-cream",
            field: "bg-camino-white",
        },
    };

    const fieldClass = `input-camino ${variants[color].field}`;

    return (
        <section id={id} className={`${variants[color].section} py-[var(--spacing-camino-3xl)] text-camino-green`}>
            <div className="grid-camino gap-y-[var(--spacing-camino-xl)]">

                <div className="col-span-4 md:col-span-6 flex flex-col gap-[var(--spacing-camino-m)] md:pr-12">
                    <h1 className="text-camino-l">{title}</h1>
                    <p className="text-camino-s">{description}</p>
                </div>

                <form className="text-camino-xs col-span-4 md:col-span-6 flex flex-col items-start gap-[var(--spacing-camino-xl)]">
                    <div className="flex w-full flex-col gap-[var(--spacing-camino-m)]">

                        <div className="grid grid-cols-2 gap-[var(--spacing-camino-m)]">
                            <input
                                type="text"
                                required
                                name="name"
                                placeholder="Nombre"
                                className={fieldClass}
                            />
                            <input
                                type="text"
                                required
                                name="lastname"
                                placeholder="Apellido"
                                className={fieldClass}
                            />
                        </div>

                        <input
                            type="email"
                            required
                            name="email"
                            placeholder="E-mail"
                            className={fieldClass}
                        />

                        <textarea
                            required
                            name="message"
                            rows={6}
                            placeholder="Cuéntanos tu caso"
                            className={`${fieldClass} resize-none`}
                        />

                        <div className="flex gap-[var(--spacing-camino-m)] text-sm md:items-center">
                            <input
                                type="checkbox"
                                id="privacy-policy"
                                name="privacy_policy"
                                required
                                className="h-5 w-5 shrink-0 cursor-pointer appearance-none rounded border border-camino-green bg-transparent checkbox-camino"
                            />
                            <label htmlFor="privacy-policy">
                                Estoy de acuerdo con la{" "}
                                <a href="/politica-de-privacidad" target="_blank" rel="noreferrer" className="underline">
                                    política de privacidad
                                </a>.
                            </label>
                        </div>

                    </div>

                    <Button
                        type="submit"
                        label="Enviar"
                    />
                </form>

            </div>
        </section>
    );
}

export default Form;