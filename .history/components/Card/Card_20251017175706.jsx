import styles from "./Card.module.css";

function Card({ image, title, description }) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </div>
            {image && (
                <div className={styles.image_wrapper}>
                    <img
                        src={image}
                        alt={title}
                        className={styles.image}
                    />
                </div>
            )}
        </div>
    );
}

export default Card;
