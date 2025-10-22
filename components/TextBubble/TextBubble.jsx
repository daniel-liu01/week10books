import styles from "./TextBubble.module.css";

export default function TextBubble({ textType, text }) {
    if (textType === "ai") {
        return (
            <div className={styles.containerAi}>
                <p className={styles.textAi}>{text}</p>
            </div>
        );
    }

    return (
        <>
            <div className={styles.containerUser}>
                <p className={styles.textUser}>{text}</p>
            </div>
        </>
    );
}
