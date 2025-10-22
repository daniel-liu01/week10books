import styles from "./TextBubble.module.css";

    export default function TextBubble({ textType, textColor }) {

        if textType === 'ai'
        return (
            <>
            <div className={styles.container}>
                <p className ={styles.text}>If you were me… would you choose the path that helps you find yourself, or the one that helps you find others?</p>
            </div>
            </>
        )
    }