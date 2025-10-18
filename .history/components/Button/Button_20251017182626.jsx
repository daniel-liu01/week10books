import styles from "./Button.module.css";

function Button({
    type = "primary",
    isDisabled = false,
    size = "default",
    value,
    onClick,
}) {
    let buttonClass = styles.button;

    if (type === "primary") buttonClass += ` ${styles.primary}`;
    if (type === "secondary") buttonClass += ` ${styles.secondary}`;
    if (type === "terciary") buttonClass += ` ${styles.terciary}`;
    if (type === "warning") buttonClass += ` ${styles.error}`;
    if (size === "small") buttonClass += ` ${styles.small}`;
    if (size === "large") buttonClass += ` ${styles.large}`;
    if (isDisabled) buttonClass += ` ${styles.disabled}`;

    return (
        <input
            type='button'
            className={buttonClass}
            value={value}
            onClick={onClick}
            disabled={isDisabled}
        />
    );
}

export default Button;
