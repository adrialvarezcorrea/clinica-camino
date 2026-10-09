function Button({
    href,
    type = "button",
    variant = "outlined",
    color = "light",
    label,
    icon,
    target,
    rel,
    className = "",
}) {

    const variants = {
        "outlined-light": "button-camino-outlined-light",
        "outlined-dark": "button-camino-outlined-dark",
        "solid-light": "button-camino-solid-light",
        "solid-dark": "button-camino-solid-dark",
    };

    const classes = `button-camino ${variants[`${variant}-${color}`]} ${className}`;

    const content = (
        <>
            {label}
            {icon && <img src={icon} alt="" className="h-4 w-4 shrink-0" />}
        </>
    );

    if (href) {
        return (
            <a href={href} target={target} rel={rel} className={classes}>
                {content}
            </a>
        );
    }

    return (
        <button type={type} className={classes}>
            {content}
        </button>
    );
}

export default Button;
