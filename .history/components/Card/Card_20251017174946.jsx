import styles from "./Card.module.css";

function Card({ image, title, description, onPrimaryClick, onSecondaryClick }) {
    return (
        <div className={styles.container}>
            {image && (
                <div className={styles.image_wrapper}>
                    <img
                        src={image}
                        alt={title}
                        className={styles.image}
                    />
                </div>
            )}

            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </div>

            <div className={styles.actions}>
                <button
                    className={styles.primary_btn}
                    onClick={onPrimaryClick}>
                    Primary
                </button>
                <button
                    className={styles.secondary_btn}
                    onClick={onSecondaryClick}>
                    Secondary
                </button>
            </div>
        </div>
    );
}

export default Card;
