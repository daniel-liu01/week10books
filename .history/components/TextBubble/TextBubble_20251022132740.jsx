import styles from "./TextBubble.module.css";
import AnnaAvatar from "../AnnaAvatar/AnnaAvatar";

export default function TextBubble({ textType, text }) {
    if (textType === "ai") {
        return (
            <div></div>
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
