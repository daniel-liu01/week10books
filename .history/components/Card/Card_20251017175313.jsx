import styles from "./Card.module.css";
import Button from "../Button/Button";

function Card({ image, title, description }) {
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
                <Button
                    variant='primary'
                    label='Start'
                />
            </div>
        </div>
    );
}

export default Card;
