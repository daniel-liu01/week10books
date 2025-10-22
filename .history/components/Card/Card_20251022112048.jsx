import styles from "./Card.module.css";
import Button from "../../components/Button/Button";

function Card({ image, title, description, type }) {
    return (
        <>
            {type === "regular" && (
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
            )}
            {type === "button" && (
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
                    <Button
                        type='primary'
                        size='large'
                        value='Start Simulation'
                        onClick={() => console.log("clicked")}
                        isDisabled={false}
                    />
                </div>
            )}
        </>
    );
}

export default Card;
