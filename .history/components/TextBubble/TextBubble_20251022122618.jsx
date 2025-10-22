import styles from "./TextBubble.module.css";

export default function TextBubble({ textType, textColor }) {
    if (textType === "ai") {
        return (
            <div className={styles.containerAi}>
                <p className={styles.textAi}>
                    If you were me… would you choose the path that helps you
                    find yourself, or the one that helps you find others?
                </p>
            </div>
        );
    }
    return (
        <>
            <div className={styles.containerUser}>
                <p className={styles.textUser}>
                    If you were me… would you choose the path that helps you
                    find yourself, or the one that helps you find others?
                </p>
            </div>
        </>
    );
}
