import styles from "./NarrativeBox.module.css";

function NarrativeCard(title, description) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
}

export default NarrativeCard;
